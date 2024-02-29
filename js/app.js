//Inicializacion de var, objetos y DOMS
var nickInput;
var tamanoInput;
var emailInput;
var formEntrada;
var error;


//Funciones de eventos
/**
 * Comprueba los datos correctos del formulario de entrada
 * @date 2024-02-29
 * @param { EventObject } event Evento que salta al realizar el submit
 */
function comprobarForm(event) {
    //Comprobar cambios

    if(nickInput.value.match(/(?<!\S)[0-9]/)){
        nickInput.focus();
        event.preventDefault();
        error.innerText = "El campo nick no puede comenzar con un numero";
        return false;
    }
    else

    if (tamanoInput.value == "0"){
        tamanoInput.focus();
        event.preventDefault();
        error.innerText = "Se debe seleccionar un tamaño de panel";
        return false;
    }
    //Si la informacion es correcta
    datosusuarios(nickInput, tamanoInput, emailInput);
    historicoUsuarios(nickInput);
    return true;
}

/**
 * Carga de objetos del DOM, comprobaciones y eventos del formulario
 * @date 2024-02-29
 */
function domCargado(){
    //Captura de todos los Elements
    nickInput = document.getElementById("nick");
    tamanoInput = document.getElementById("tamano");
    emailInput = document.getElementById("email");
    formEntrada = document.getElementById("formEntrada");
    error = document.getElementById("error");
    
    //Comprobar si hay algun error de juego.html
    if (sessionStorage.getItem('error') != null) {
        error.innerText = sessionStorage.getItem('error');
        sessionStorage.removeItem('error');
    }

    formEntrada.addEventListener('submit', comprobarForm);
}


//Inicio de carga de eventos
document.addEventListener('DOMContentLoaded', domCargado);

//Geolocalizacion
geolocalizacionUs();