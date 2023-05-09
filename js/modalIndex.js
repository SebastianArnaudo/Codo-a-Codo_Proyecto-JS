const modal= document.getElementById("modal"); //LLAMAMOS A LA VENTANA MODAL ENTERA
const closeButton= document.getElementById("closeButton"); //LLAMAMOS AL BOTON QUE "CIERRA" LA VENTANA 


//MODIFICAMOS EL ESTILO "DISPLAY" QUE SE ENCAEGA DE PRESENTAR LA VENTANA AUTOMATICAMENTE

setTimeout(() => {
    modal.style.display="flex"
}, 1000);

closeButton.addEventListener("click",() => modal.style.display="none");

