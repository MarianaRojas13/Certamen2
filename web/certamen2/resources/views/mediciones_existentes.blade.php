@extends('layoults.master')
@section('contenido')
    <div class="row mt-2">
        <div class="col-12 col-6 col-lg-5 mx-auto">
            <div class="card">
                <div class="card-header bg-primary text-dark">
                    <span>Filtrar por medida</span>
                </div>
                <div class="card-body" >
                    <select class="form-select" id="filtro-cbx">
                        <option value="todos">Ninguno</option>
                    </select>    
                </div>
            </div>
        </div>
    </div>
    <div class="row mt-5">
        <div class="col-12 col-md-12 col-lg-6 mx-auto">
            <table class="table table-hover table-bordered table-striped table-responsive">
                <thead class="bg-info">
                    <tr>
                        <td>Fecha</td>
                        <td>Hora</td>
                        <td>Medidor</td>
                        <td>Valor</td>
                        <td>Acciones</td>
                    </tr>
                </thead>
                <tbody id="tbody-medicion">

                </tbody>
            </table>
        </div>
    </div>
@endsection
@section('javascript')
    <script src="{{asset("js/servicios/lecturasService.js")}}"></script>
    <script src="{{asset("js/servicios/medidoresService.js")}}"></script>
    <script src="{{asset('js/mediciones_existentes.js')}}"></script>
    
@endsection