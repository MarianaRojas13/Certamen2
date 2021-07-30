<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\LecturasController;
/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::middleware('auth:api')->get('/user', function (Request $request) {
    return $request->user();
});
Route::get("/medidor/get",[LecturasController::class,"getMedidores"]);
Route::get("/medidas/get",[LecturasController::class,"getTipoMedidas"]);
Route::get("/lectura/get",[LecturasController::class,"getLecturas"]);
Route::get("/lecturas/filtrar",[LecturasController::class,"filtrarMedidas"]);
Route::get("/lectura/post",[LecturasController::class,"crearLectura"]);
Route::post("/lectura/delete",[LecturasController::class,"eliminarLectura"]);