// Configuración de MSAL.js
const msalConfig = {
    auth: {
        clientId: "TU_CLIENT_ID", // Reemplázalo con tu Application (client) ID de Azure
        authority: "https://login.microsoftonline.com/TU_TENANT_ID", // Reemplázalo con tu Directory (tenant) ID
        redirectUri: "http://localhost:5500/" // Asegúrate de que coincida con el de Azure
    }
};

const msalInstance = new msal.PublicClientApplication(msalConfig);

// Función para iniciar sesión
function login() {
    const loginRequest = {
        scopes: ["openid", "email", "profile"]
    };

    msalInstance.loginPopup(loginRequest)
        .then(response => {
            console.log("Usuario autenticado:", response.account);
            alert("Inicio de sesión exitoso: " + response.account.username);
            window.location.href = "dashboard.html"; // Redirige a la página principal
        })
        .catch(error => {
            console.error("Error de autenticación:", error);
        });
}
