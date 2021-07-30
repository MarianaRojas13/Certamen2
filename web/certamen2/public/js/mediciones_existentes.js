const cargarLecturas=async()=>{
    let filtroCbx=document.querySelector("#filtro-cbx");
    let medida=await getTipoMedidas();
    medida.forEach(m=>{
        let option=document.createElement("option");
        option.innerText=m;
        option.value=m;
        filtroCbx.appendChild(option);
    });
};

const iniciarEliminacion= async function(){
    let id=this.idLectura;
    if(await eliminarLectura(id)){
        let lectura=await getLecturas();
       cargarTabla(lectura);
        Swal.fire("Eliminada","Eliminada exitosamente","info");
    }else{
        Swal.fire("Error","No se puede hacer","error");
    }
   
};
const valor=async(medida)=>{
    medida=await getTipoMedidas();
    if(medida="Kilowatts"){
        medida.innerText("kW");
    };
    if(medida="Watts"){
        medida.innerText("W");
    };
    if(medida="Temperatura"){
        medida.innerText("C");
    };
    return medida;
};

const cargarTabla=(lectura)=>{
    let tbody=document.querySelector("#tbody-medicion");
    tbody.innerHTML="";
    for(let i=0;i<lectura.length;++i){
        let tr=document.createElement("tr");
        let tdFecha=document.createElement("td");
        tdFecha.innerText=lectura[i].fecha;
        let tdHora=document.createElement("td");
        tdHora.innerText=lectura[i].hora;
        let tdMedidor=document.createElement("td");
        tdMedidor.innerText=lectura[i].medidor;
        let tdValor=document.createElement("td");
        tdValor.innerText=lectura[i].valor;
        if(tdValor>60){
            tdValor.classList.add("fas","fa-fire","text-danger","fa-2x");
        };
        let tdAcciones=document.createElement("td");
        let botonEliminar=document.createElement("button");
        botonEliminar.innerText="Descartar Lectura";
        botonEliminar.classList.add("btn","btn-danger");
        botonEliminar.idLectura=lectura[i].id;
        botonEliminar.addEventListener("click",iniciarEliminacion);
        tdAcciones.appendChild(botonEliminar);
    
        tr.appendChild(tdFecha);
        tr.appendChild(tdHora);
        tr.appendChild(tdMedidor);
        tr.appendChild(tdValor);
        tr.appendChild(tdAcciones);
        tbody.appendChild(tr);
    }
    document.querySelector("#filtro-cbx").addEventListener("change",async()=>{
        let filtro=document.querySelector("#filtro-cbx").value;
        let lecturas=await getLecturas(filtro);
        cargarTabla(lecturas);
    })
    document.addEventListener("DOMContentLoaded", async()=>{
       await cargarLecturas();
       let tipo=await getTipoMedidas();
       valor(tipo);
        let lectura=await getLecturas();
        cargarTabla(lectura);
    });
};