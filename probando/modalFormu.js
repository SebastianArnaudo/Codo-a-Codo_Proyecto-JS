const modal= document.getElementById("modal"); //LLAMAMOS A LA VENTANA MODAL ENTERA
const openButton= document.getElementById("openButton"); 
//LLAMAMOS AL BOTON QUE "ABRE" LA VENTANA (La ide se modifica segun el boton que ya exista) 
const closeButton= document.getElementById("closeButton"); //LLAMAMOS AL BOTON QUE "CIERRA" LA VENTANA 

//MODIFICAMOS EL ESTILO "DISPLAY" QUE SE ENCAEGA DE PRESENTAR LA VENTANA MEDIANTE ACCIONES CONCRETAS

setTimeout(() => {
    modal.style.display="flex"
}, 1000);

closeButton.addEventListener("click",() => modal.style.display="none");
openButton.addEventListener("click",() => modal.style.display="flex");