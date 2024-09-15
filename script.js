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

document.getElementById('contactForm').addEventListener('submit', function(event) {
    // Clear previous error messages
    document.getElementById('nameError').textContent = '';
    document.getElementById('emailError').textContent = '';
    document.getElementById('phoneError').textContent = '';
    document.getElementById('messageError').textContent = '';

    // Get form values
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const phone = document.getElementById('phone').value.trim();
    const message = document.getElementById('message').value.trim();

    let valid = true;

    // Validate Name
    if (name === '') {
        document.getElementById('nameError').textContent = 'Name is required.';
        valid = false;
    }

    // Validate Email
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (email === '') {
        document.getElementById('emailError').textContent = 'Email is required.';
        valid = false;
    } else if (!emailPattern.test(email)) {
        document.getElementById('emailError').textContent = 'Enter a valid email address.';
        valid = false;
    }

    // Validate Phone (Optional: Add more specific validation as needed)
    if (phone === '') {
        document.getElementById('phoneError').textContent = 'Phone number is required.';
        valid = false;
    } else if (!/^\d{10}$/.test(phone)) {
        document.getElementById('phoneError').textContent = 'Enter a valid phone number.';
        valid = false;
    }

    // Validate Message
    if (message === '') {
        document.getElementById('messageError').textContent = 'Message cannot be empty.';
        valid = false;
    }

    // Prevent form submission if validation fails
    if (!valid) {
        event.preventDefault();
    }
});