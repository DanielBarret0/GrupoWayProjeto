let currentIndex = 0;
const totalSlides = 5;
const slideWidth = 100; // Percentage

function showSlide(index) {
    const carousel = document.querySelector('.carousel');
    carousel.style.transform = `translateX(-${index * slideWidth}%)`;
}

function nextSlide() {
    currentIndex = (currentIndex + 1) % totalSlides;
    showSlide(currentIndex);
}

function prevSlide() {
    currentIndex = (currentIndex - 1 + totalSlides) % totalSlides;
    showSlide(currentIndex);
}

// Automatic slide change every 5 seconds
setInterval(nextSlide, 5000);

// Initial slide
showSlide(currentIndex);




