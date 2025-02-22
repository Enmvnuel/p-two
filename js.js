function validarLogin() {
    let email = document.getElementById("email").value;
    let clave = document.getElementById("password").value;
    let mensajeError = document.getElementById("mensajerror");

    const usuarioBd = "correo@gmail.com";
    const claveBd = "12345";

    if (email === "" || clave === "") {
        mensajeError.textContent = "Datos de accesos en Blanco"
        return;
    }

    if (email === usuarioBd && clave === claveBd) {
        mensajeError.textContent = "BIEN";
        setTimeout(() => {
            window.location.href ="https:/aralsoft.com.pe"
        }, 2000);
    } else {
        mensajeError.textContent = "MAL";
    }
}

function togglePassword(){
    let passwordInput = document.getElementById("password");
    if (passwordInput.type === "password"){
        passwordInput.type = "text";
    }else {
        passwordInput.type = "password";
    }
}