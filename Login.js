function redirigirAIndex() {
    window.location.href = "index.html";
}
function validarCorreo() {
    var correo = document.getElementById("email").value;
    var dominioPermitido = "@telefonica.com";

    if (correo.endsWith(dominioPermitido)) {
        window.location.href = "index.html"; // Redirige al index si el correo es válido
    } else {
        alert("Solo se permiten correos corporativos de Telefónica.");
    }
}

