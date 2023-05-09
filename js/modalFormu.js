const modal= document.getElementById("modal"); //LLAMAMOS A LA VENTANA MODAL ENTERA
const openButton= document.getElementById("openButton"); 
//LLAMAMOS AL BOTON QUE "ABRE" LA VENTANA (La ide se modifica segun el boton que ya exista) 
const closeButton= document.getElementById("closeButton"); //LLAMAMOS AL BOTON QUE "CIERRA" LA VENTANA 

//MODIFICAMOS EL ESTILO "DISPLAY" QUE SE ENCAEGA DE PRESENTAR LA VENTANA MEDIANTE ACCIONES CONCRETAS

openButton.addEventListener("click",() => modal.style.display="flex");

closeButton.addEventListener("click",() => modal.style.display="none");

