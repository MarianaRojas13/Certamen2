<?php

namespace App\Http\Controllers;
use Illuminate\Http\Request;
use App\Models\Lectura;
class LecturasController extends Controller
{   
    public function getLecturas(){
        
            $lecturas=Lectura::all();
            return $lecturas;
     }
    public function getMedidores(){
        $medidor=["01","02","03","04","05","06","07","08","09","10"];
        return $medidor;
    }
    public function getTipoMedidas(){
        $tmedidas=["Kilowattz","Watts","Temperatura"];
        return $tmedidas;
    }

    public function crearLectura(Request $request){
        
            $input = $request->all();
            
            $lectura=new Lectura();
            $lectura->fecha=$input["fecha"];
            $lectura->hora=$input["hora"];
            $lectura->medidor=$input["medidor"];
            $lectura->direccion=$input["direccion"];
            $lectura->valor=$input["valor"];
            $lectura->tmedida=$input["tmedida"];
            $lectura->save();
            return $lectura;
    }
    public function eliminarLectura(Request $request){
        $input = $request->all();
        $id=$input ["id"];
        $lectura=Lectura::findOrFail($id);
        $lectura->delete();
        return "ok";

    }
    public function filtrarMedidas(Request $request){
        $input=$request->all();
        $filtro=$input["filtro"];
        $lecturas=Lectura::where("tmedida",$filtro)->get();
        return $lecturas;
    }
}
