const getMedidores= async()=>{
    let resultado= await axios.get("api/medidor/get");
    return resultado.data;
}
const getTipoMedidas= async()=>{
    let resultado= await axios.get("api/medidas/get");
    return resultado.data;
}
