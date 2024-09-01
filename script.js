let slideIndex = 0;
showSlides();

function showSlides() {
    let slides = document.getElementsByClassName("slider-slide");
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none"; // Hide all slides
    }
    slideIndex++;
    if (slideIndex > slides.length) { slideIndex = 1; } // Reset to the first slide
    slides[slideIndex - 1].style.display = "block"; // Show the current slide
}

function prevSlide() {
    let slides = document.getElementsByClassName("slider-slide");
    slideIndex -= 2;
    if (slideIndex < 0) { slideIndex = slides.length - 1; }
    showSlides();
}

function nextSlide() {
    showSlides();
}
