"use strict"

let forma      = document.getElementById("forma");
let salidaRaiz = document.getElementById("salidaRaiz");

function procesa(){

    try {

        let valorX = forma["valorX"].value;
        let raizCuadrada = Math.sqrt(valorX);
        validar(valorX === "", "Ingresa un Número por favor");
        validar(valorX < 0, "No puedes ingresar Números NEGATIVOS");
        salidaRaiz.value = raizCuadrada;

    }catch(e){
        salidaRaiz.value = e.message;
    }
}

function validar( condicion, mensaje){
    if (condicion) {
        throw new Error(mensaje);
    }
}
