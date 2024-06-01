//Validaciones de Registro de Usuarios
function validarEmail(email) {
    var regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    return regex.test(email);
}

function validarPassword(password) {
    var regex = /^(?=.*\d)(?=.*[A-Z]).{8,}$/;
    return regex.test(password);
}

function validarRegistro() {
    var nombre = document.getElementById("nombre").value;
    var apellido = document.getElementById("apellido").value;
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;

    if (nombre.trim() === "" || apellido.trim() === "") {
        alert("Por favor, ingresa tu nombre y apellido.");
        return false;
    }

    if (!soloLetras(nombre) || !soloLetras(apellido)) {
        alert("El nombre y el apellido solo pueden contener letras.");
        resaltarError("nombre");
        resaltarError("apellido");
        return false;
    }

    if (!validarEmail(email)) {
        alert("Por favor, ingresa un correo electrónico válido.");
        resaltarError("email");
        return false;
    }

    if (!validarPassword(password)) {
        alert("La contraseña debe tener al menos 8 caracteres, incluir números y letras, y al menos una letra mayúscula.");
        resaltarError("password");
        return false;
    }

    return true;
}

function soloLetras(texto) {
    var regex = /^[a-zA-Z\s]+$/;
    return regex.test(texto);
}

function resaltarError(idInput) {
    document.getElementById(idInput).style.borderColor = "red";
}



//Validaciones de Inicio de Sesion
document.addEventListener("DOMContentLoaded", function() {
    var formulario = document.getElementById("formularioInicioSesion");
     // Agregar eventos de validación a los campos de entrada
    document.getElementById("email").addEventListener("input", validarEmailInput);
    document.getElementById("password").addEventListener("input", validarPasswordInput);
    
    formulario.addEventListener("submit", function(event) {
        event.preventDefault(); // Evitar que el formulario se envíe por defecto
        
        // Obtener los valores de los campos
        var email = document.getElementById("email").value;
        var password = document.getElementById("password").value;

        // Validar el correo electrónico y la contraseña
        if (!validarEmail(email)) {
            mostrarError("email", "Ingrese un correo electrónico válido");
            return;
        }

        if (!validarPassword(password)) {
            mostrarError("password", "La contraseña debe tener al menos 8 caracteres, incluyendo números y letras, y al menos una mayúscula");
            return;
        }
        
        // Si la validación es exitosa, enviar el formulario
        formulario.submit();
    });

      // Función para validar el correo electrónico mientras se escribe
    function validarEmailInput() {
        var email = this.value;
        var error = document.getElementById("email-error");
        if (validarEmail(email)) {
            error.innerHTML = "";
        } else {
            error.innerHTML = "Ingrese un correo electrónico válido";
        }
    }
    // Función para validar la contraseña mientras se escribe
    function validarPasswordInput() {
        var password = this.value;
        var error = document.getElementById("password-error");
        if (validarPassword(password)) {
            error.innerHTML = "";
        } else {
            error.innerHTML = "La contraseña debe tener al menos 8 caracteres, incluyendo números y letras, y al menos una mayúscula";
        }
    }

    // Función para validar el correo electrónico
    function validarEmail(email) {
        var regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return regex.test(email);
    }

    // Función para validar la contraseña
    function validarPassword(password) {
        var regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/;
        return regex.test(password);
    }

    // Función para mostrar mensajes de error
    function mostrarError(campo, mensaje) {
        var elementoError = document.getElementById(campo + "-error");
        if (elementoError) {
            elementoError.innerHTML = mensaje;
        }
    }

});