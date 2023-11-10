const carousel = document.getElementById("carousel");
const images = document.querySelectorAll(".carousel-slide img");
let currentImageIndex = 0;

function rotateImages() {
    currentImageIndex = (currentImageIndex + 1) % images.length;
    const translateValue = -currentImageIndex * 300 + "px";
    carousel.style.transform = `translateX(${translateValue})`;
}

setInterval(rotateImages, 4000); // Muda a cada 3 segundos (3000 milissegundos)
