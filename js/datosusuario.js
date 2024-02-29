/* 
* JS para la gestion de datos de los usuarios
* @author Facundo Ulloa <ulloafacundowork@gmail.com>
* {@link }
*/
var nick;
var tamano;
var email;
var geolocalizacionTxt;

//Session Storage
/**
 * Almacenar los datos en el SessionStorage
 * @date 2024-02-28
 * @param { HTMLElement } nick nick del ususario
 * @param { HTMLElement } tamano tamaño del panel
 * @param { HTMLElement } email email del usuario
 */

function datosusuarios(nick, tamano, email) {
    sessionStorage.setItem('nick', nick.value);
    sessionStorage.setItem('tamano', tamano.value);
    sessionStorage.setItem('email', email.value);
    sessionStorage.setItem('geolocalizacionTxt', geolocalizacionTxt);
}

function getDatUs() {
    nick = sessionStorage.getItem('nick');
    tamano = sessionStorage.getItem('tamano');
    email = sessionStorage.getItem('email');
}

function comprobacionDatUsuario(){
    if (nick == null) {
        sessionStorage.setItem('error', 'No se ha rellenado correctamente el formulario')
        return false;
    }
    return true;
}

function geolocalizacionUs(){
    if(!navigator.geolocation){
        geolocalizacionTxt = "El navegador no es comppatible con API Geolocaation";
    }
    else{
        navigator.geolocation.getCurrentPosition(
            //Si hay exito
            (position) => {geolocalizacionTxt = 'Latitud:' +position.coords.latitude+ ', Longitud:' +position.coords.longitude},
            //Error
            () => {geolocalizacionTxt = "La geolocalizacion no se ha podido realizar"},
        )
    }
}


//Local Storage
/**
 * Almacenar los datos en el LocalStorage
 * @date 2024-02-29
 * @param { HTMLElement } nick nick del usuario
 */
function historicoUsuarios(nick){
    let historicoStorage = localStorage.getItem('historico');
    let historico;
    if(historicoStorage == null){
        historico = [];
    }
    else{
        historico = JSON.parse(historicoStorage);
    }
    let registroUsuario = {
        usuario: nick.value,
        fecha: Date.now()
    }
    historico.push(registroUsuario);
    localStorage.setItem('historico', JSON.stringify(historico));
}