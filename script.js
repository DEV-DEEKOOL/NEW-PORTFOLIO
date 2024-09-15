const hamburger = document.getElementById('hamburger');
const menu = document.querySelector('.menu');

hamburger.addEventListener('click', function () {
    const hamIcon = this.querySelector('.hamburger-icon');
    const crossIcon = this.querySelector('.cross-icon');
    if (hamIcon.style.display === "none") {
        hamIcon.style.display = "inline-block"
        menu.style.display = "none"
        crossIcon.style.display = "none"
    }
    else {
        crossIcon.style.display = "inline-block"
        hamIcon.style.display = "none"
        menu.style.display = "block"
    }
});

/*slide show
let images = [
    "./assets/img/1.png", //0
    "./assets/img/2.png", //1
    "./assets/img/3.png", //2
    "./assets/img/4.png", //3
    "./assets/img/5.png", //4
    "./assets/img/6.png", //4
    "./assets/img/7.png" //6
];

let currentIndex = 0;
function nextSlide() {
    currentIndex = (currentIndex + 1) % images.length;
    document.getElementById("slider-image").src= images[currentIndex];
}
function prevSlide() {
    currentIndex = (currentIndex + 1 + images.length) % images.length;
    document.getElementById("slider-image").src= images[currentIndex];
} */

    let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}    
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active";
}