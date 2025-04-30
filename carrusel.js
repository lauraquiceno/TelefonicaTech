<script>
function moveSlide(direction) {
    let carousel = document.querySelector(".carousel");
    let scrollAmount = 220; // Ajusta el desplazamiento según el tamaño de las tarjetas
    carousel.scrollBy({ left: direction * scrollAmount, behavior: "smooth" });
}
</script>