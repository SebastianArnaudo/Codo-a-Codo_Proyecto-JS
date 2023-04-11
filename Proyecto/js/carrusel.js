let indice = 1;
muestraSlides(indice);

function avanzaSlider(n){
    muestraSlides(indice+=n);
}

function posicionSlider(n){
    muestraSlides(indice=n);
}

setInterval(function tiempo() {
    muestraSlides(indice+=1)
}, 10000);

function muestraSlides(n){
    let i;
    let slides = document.getElementsByClassName("contenidoSlider");
    let puntos = document.getElementsByClassName("punto");

    if(n > slides.length){
        indice = 1;
    }else if(n < 1){
        indice = slides.length();
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

