/*Creamos un índice de posición y una función que lo muestra */
let indice = 1; //Le damos al indice un valor respecto a la cantidad de “tarjetas” disponibles
muestraSlides(indice);

/*Funciones de  movimiento*/
function avanzaSlider(n){  
    muestraSlides(indice+=n);  //Al sumar (o restar según el caso) al valor del índice, este representará otra tarjeta   
}

function posicionSlider(n){   
    muestraSlides(indice=n);  //Aquí le decimos simplemente que adquiera el valor de una tarjeta en específico
}

/*Función principal*/
function muestraSlides(n){
    let i;
    let slides = document.getElementsByClassName("contenidoSlider"); 
    let puntos = document.getElementsByClassName("punto");

    if(n > slides.length){
        indice = 1;
    }else if(n < 1){
        indice = slides.length;
    }

    for(i = 0; i < slides.length; i++){
        slides[i].style.display = "none";
    }

    for(i = 0; i < puntos.length; i++){
        puntos[i].className = puntos[i].className.replace(" active" , "");
    }

    slides[indice-1].style.display = "flex";
    puntos[indice-1].className += " active";
}

