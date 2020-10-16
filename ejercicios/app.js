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
    } else if {
        // Respuestas cambien por lo ingresado por los usuarios en los inputs
        respuestaCorreo.innerHTML = 'correo: ' + correo.value;
        respuestaContrasena.innerHTML = 'Contraseña: ' + contrasena.value;
    }
}


boton.addEventListener('click', iniciarSesion);