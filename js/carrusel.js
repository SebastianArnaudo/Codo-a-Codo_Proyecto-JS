/*Creamos un índice de posición y una función que lo muestra */
let indice = 1; //Le damos al indice un valor respecto a la cantidad de “tarjetas” disponibles.
muestraSlides(indice);

/*Funciones de  movimiento*/
function avanzaSlider(n){  
    muestraSlides(indice+=n);  //Al sumar (o restar según el caso) al valor del índice, este representará otra tarjeta.
}

function posicionSlider(n){   
    muestraSlides(indice=n);  //Aquí le decimos simplemente que adquiera el valor de una tarjeta en específico.
}

/*Función principal*/
function muestraSlides(n){
    let i;
    let slides = document.getElementsByClassName("contenidoSlider"); //Lamamos a la clase de las “tarjetas".  
    let puntos = document.getElementsByClassName("punto"); //Llamamos a la clase de los indicadores.

    if(n > slides.length){ //Si “n”(índice) es mayor a la cantidad de instancias “slides” el índice regresa a 1.
        indice = 1;
    }else if(n < 1){ //Si “n”(índice) es menor a 1 el índice adquiere el valor de la ultima instancia.
        indice = slides.length; 
    }

    /*
    Daremos un display none a todas las instancias la clase "contenidoSlider" 
    haciendo que desaparezcan aquellas que no estan representadas en el índice
    */ 
    for(i = 0; i < slides.length; i++){ 
        slides[i].style.display = "none";
    }

    /*Quitaremos la clase “active” a la instancia “puntos” que no esté representada en el índice*/

    for(i = 0; i < puntos.length; i++){
        puntos[i].className = puntos[i].className.replace(" active" , "");
    }

    //le daremos un display flex a la instancia “contenidoSlider” que esté representada en el índice.
    slides[indice-1].style.display = "flex";
    puntos[indice-1].className += " active";//le daremos la clase “active” a la instancia “puntos” representada en el índice.
}

