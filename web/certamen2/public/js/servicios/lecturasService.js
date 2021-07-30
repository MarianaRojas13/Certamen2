const getLecturas = async(filtro="ninguno")=>{
    let resp;
        if(filtro=="ninguno"){
           let resp=await axios.get("api/lectura/get");
        }else{
            resp=await axios.get(`api/lectura/filtrar?filtro=${filtro}`);
        }
        return resp.data;

};
const crearLectura= async(lectura)=>{
   
    let resp =await axios.post("api/lectura/post",lectura,{
        headers:{
            'Content-Type': 'application/json'
        }
    });
    return resp.data;
};
const eliminarLectura= async(id)=>{
    try{
        let resp=await axios.post("api/lectura/delete",{id},{
            headers:{
                "Content-Type":"application/json"
            }   
        });
        return resp.data=="ok";
    }catch(e){
        return false;
    }
}