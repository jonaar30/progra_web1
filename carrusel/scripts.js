// Declara una variable global `slideIndex` e inicialízala en 0
let slideIndex = 0;

// Llama a la función `showSlides()` para iniciar el carrusel automáticamente
showSlides();

// Definición de la función `showSlides()`
function showSlides() {
    // Obtiene todas las imágenes dentro del contenedor con la clase '.carousel-content'
    const slides = document.querySelectorAll('.carousel-content img');

    // Remueve la clase 'active' de todas las imágenes
    for (let i = 0; i < slides.length; i++) {
        slides[i].classList.remove('active');
    }

    // Incrementa el índice de la diapositiva actual
    slideIndex++;

    // Si el índice de la diapositiva supera la cantidad de imágenes, vuelve a la primera imagen
    if (slideIndex > slides.length) {
        slideIndex = 1;
    }

    // Añade la clase 'active' a la imagen correspondiente según el `slideIndex`
    slides[slideIndex - 1].classList.add('active');

    // Establece un temporizador para llamar a la función `showSlides()` cada 2000 milisegundos (2 segundos)
    setTimeout(showSlides, 2000);
}