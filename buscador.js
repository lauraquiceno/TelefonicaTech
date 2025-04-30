function search() {
    let input = document.getElementById("searchInput").value.trim().toLowerCase();
    let cards = document.querySelectorAll(".brand-card"); // Selecciona todas las tarjetas

    cards.forEach(card => {
        let titleElement = card.querySelector("h3"); // Intenta seleccionar el h3

        if (titleElement && titleElement.innerText) {  // Solo sigue si el h3 existe
            let title = titleElement.innerText.toLowerCase();
            card.style.display = title.includes(input) ? "block" : "none";
        } else {
            console.warn("No se encontró el título en una tarjeta:", card); // Muestra advertencia si no hay h3
        }
    });
}
// boton lapiz editar
function editCard(editButton) {
    const card = editButton.parentElement;
    const titleElement = card.querySelector(".titulo");
    const imgElement = card.querySelector(".proveedor-img");

    // Crear un formulario emergente para editar el título y la imagen
    const newTitle = prompt("Edita el título:", titleElement.innerText);

    // Crear un input para subir la imagen
    const fileInput = document.createElement("input");
    fileInput.type = "file";
    fileInput.accept = "image/*";

    fileInput.onchange = function () {
        const file = fileInput.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = function (e) {
                imgElement.src = e.target.result; // Actualizar la imagen con la URL del archivo cargado
            };
            reader.readAsDataURL(file);
        }
    };

    // Mostrar el input de archivo al usuario
    fileInput.click();

    // Actualizar el título si se ingresó uno nuevo
    if (newTitle) {
        titleElement.innerText = newTitle;
    }
}

// boton basura eliminar
function deleteCard(deleteButton) {
    const card = deleteButton.parentElement;

    // Confirmar antes de eliminar
    const confirmDelete = confirm("¿Estás seguro de que deseas eliminar esta tarjeta?");
    if (confirmDelete) {
        card.remove(); // Eliminar la tarjeta del DOM
    }
}

function editCard(editButton) {
    const card = editButton.closest(".brand-card");
    const titleElement = card.querySelector(".titulo");
    const imgElement = card.querySelector(".proveedor-img");

    const newTitle = prompt("Edita el título:", titleElement.innerText);

    const fileInput = document.createElement("input");
    fileInput.type = "file";
    fileInput.accept = "image/*";

    fileInput.onchange = function () {
        const file = fileInput.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = function (e) {
                imgElement.src = e.target.result;
            };
            reader.readAsDataURL(file);
        }
    };

    fileInput.click();

    if (newTitle) {
        titleElement.innerText = newTitle;
    }
}

function deleteCard(deleteButton) {
    const card = deleteButton.closest(".brand-card");

    const confirmDelete = confirm("¿Estás seguro de que deseas eliminar esta tarjeta?");
    if (confirmDelete) {
        card.remove();
    }
}