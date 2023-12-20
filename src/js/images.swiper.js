const image = [
    "./images/hero.png",
    "./images/hero2.png",
    "./images/hero3.png",
]

let currentImageIndex = 0;

function changeImage(direction) {
    if (direction === 'left') {
        currentImageIndex = (currentImageIndex - 1 + image.length) % image.length;
    } else if (direction === 'right') {
        currentImageIndex = (currentImageIndex + 1) % image.length;
    }
    const heroImage = document.querySelector('.hero-image');
    heroImage.src = image[currentImageIndex];
}

const buttonLeft = document.querySelector('.bttn-arrow-left');
buttonLeft.addEventListener('click', changeImage('left'));

const buttonRight = document.querySelector('.bttn-arrow-right');
buttonRight.addEventListener('click', changeImage('right'));