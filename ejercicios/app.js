const correo = document.getElementById('correo');
const contrasena = document.getElementById('');


// RESPUESTAS
const respuestaContrasena = document.getElementById('respuestaCorreo');
const respuestaCorreo = document.getElementById('respuestaContrasena');

// Paso 2: Declarar la función que generará la card con las entradas del usuario
const inicarSesion = () => {


        if (correo.value === '') {
            alert('El campo de nombre está vacío');
        } else if (contrasena.value === '') {
            alert('El campo de dirección está vacío');
        } else {
            // Respuestas cambien por lo ingresado por los usuarios en los inputs
            respuestaCorreo.innerHTML = 'correo: ' + correo.value;
            respuestaContrasena.innerHTML = 'Contraseña: ' + contrasena.value;
        }
    }
    //-------------------> Challenge <------------------
    // * Usar Bootstrap *
    // Preguntar Nombre
    // Preguntar Dirección
    // Preguntar Teléfono
    // Preguntar si quieren pizza con piña o sin
    // respuestas: sí o no
    // -> mostrar las respuestas en una card de Bootstrap después de presionar un botón

// PASOS SUGERIDOS
// Paso 1: Declarar los elementos (inputs y respuestas) que vamos a usar del html (getElementById('id') es una forma)

// INPUTS
const espa = document.getElementById(id = 'espa');
const mate = document.getElementById(id = 'mate');
const histo = document.getElementById(id = 'histo');
const abc = document.getElementById(id = 'abc');


// RESPUESTAS
const respuestaEspa = document.getElementById('respuestaEspa');
const respuestaMate = document.getElementById('respuestaMate');
const respuestaHisto = document.getElementById('respuestaHisto');
const respuestaAbc = document.getElementById('respuestaAbc');

// Paso 2: Declarar la función que generará la card con las entradas del usuario
const generarVideo = () => {

    // Validar que ningún campo esté vacío
    if (espa.checked) {
        espa.innerHTML = 'Español';
    } else if (mate.checked) {
        mate.innerHTML = 'Matemáticas';
    } else if (histo.checked) {
        histo.innerHTML = 'Historia';
    } else if (abc.checked) {
        abc.innerHTML = 'Español';
    }
}


boton.addEventListener('click', generarVideo);
boton.addEventListener('click', iniciarSesion);