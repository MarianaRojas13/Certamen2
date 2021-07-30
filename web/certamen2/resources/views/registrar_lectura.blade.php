@extends('layoults.master')
@section('contenido')
<div class="row mt-3">
    <div class="col-12 col-md-8 col-lg-5 mx-auto" >
        <div class="card">
            <div class="card-header bg-primary">
                <span>Registrar lectura</span>
            </div>
            <div class="card-body">
                <div class="mb-3">
                    <label for="fecha-txt" class="form-label">Fecha</label>
                    <input type="date" id="fecha-txt" class="form-control">
                </div>
                <div class="mb-3">
                    <label for="hora-txt" class="form-label">Hora</label>
                    <input type="text" id="hora-txt" class="form-control">
                </div>
                <div class="mb-3">
                    <label for="medidor-select" class="form-label">Medidor</label>
                    <select  type="number" id="medidor-select" class="form-select">
                        
                    </select>
                </div>
                <div class="mb-3">
                    <label for="direccion-txt" class="form-label">Dirección</label>
                    <input type="text" id="direccion-txt" class="form-control">
                </div>

                <div class="mb-3">
                    <label for="valor-txt" class="form-label">Valor</label>
                    <input type="number" class="form-control" id="valor-txt">
                </div>
                <div class="mb-3">
                    <label for="tmedida-select" class="form-label">Tipo de medida</label>
                    <select  id="tmedida-select" class="form-select">
                        
                    </select>
                </div>
            </div>
            <div class="card-footer d-grid gap-1">
                <button id="registrar-btn" type="button" class="btn btn-warning">Registrar Lectura</button>
            </div>
        </div>
    </div>
</div>
@endsection
@section('javascript')
    <script src="{{asset("js/servicios/lecturasService.js")}}"></script>
    <script src="{{asset("js/servicios/medidoresService.js")}}"></script>
    <script src="{{asset('js/registrar_lectura.js')}}"></script>
    
@endsection