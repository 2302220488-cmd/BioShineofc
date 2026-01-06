const images = [
    "suren04.JPG",
    "suren05.JPG",
    "suren09.JPG",
    "suren07.JPG",
    "suren08.JPG"
];

const contactForm = document.getElementById('contactForm');
const formMsg = document.getElementById('formMsg');

contactForm.addEventListener('submit', function(e){
    e.preventDefault();
    formMsg.textContent = "Thank you! Your message has been sent.";
    contactForm.reset();
});

let index = 0;
const sliderImage = document.getElementById("sliderImage");

function nextSlide() {
    index++;
    if(index >= images.length) index = 0;
    sliderImage.src = images[index];
}

function prevSlide() {
    index--;
    if(index < 0) index = images.length - 1;
    sliderImage.src = images[index];
}

// Auto slide setiap 3 detik
setInterval(nextSlide, 3000);

