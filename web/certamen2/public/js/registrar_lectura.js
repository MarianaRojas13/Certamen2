const cargarMedidores=async()=>{
    let medidor=await getMedidores();
    let tmedidas=await getTipoMedidas();
    let medidorSelect=document.querySelector("#medidor-select");
    let medidasSelect=document.querySelector("#tmedida-select");
    medidor.forEach(m=>{
        let option =document.createElement("option");
        option.innerText=m;
        medidorSelect.appendChild(option);
    });
    tmedidas.forEach(m=>{
        let option =document.createElement("option");
        option.innerText=m;
        medidasSelect.appendChild(option);
    });

}
cargarMedidores();
document.querySelector("#registrar-btn").addEventListener("click",async()=>{
    let fecha=document.querySelector("#fecha-txt").value;
    let hora=document.querySelector("#hora-txt").value.trim();
    let medidor=document.querySelector("#medidor-select").value;
    let direccion=document.querySelector('#direccion-txt').value.trim();
    let valor=document.querySelector('#valor-txt').value.trim();
    let tmedida=document.querySelector('#tmedida-select').value;
    let errores=[];
    if(hora.length>5){
        errores.push("Debe ser HH:MM");
    };
    
    if(valor<0 || valor>500){
        errores.push("minimo 0 maximo 500 de valor");
    };
    if(errores.length===0){
        let lectura={};
        lectura.fecha=fecha;
        lectura.hora=hora;
        lectura.medidor=medidor;
        lectura.direccion=direccion;
        lectura.valor=valor;
        lectura.tmedida=tmedida;
        let res=await crearLectura(lectura);
        await Swal.fire("Registrada","creada exitosamente","info");
        //redirigir a otra pagina:
        window.location.href="mediciones_existentes";
    }else{
        await Swal.fire("Registrada","creada exitosamente","warning");
    }
});