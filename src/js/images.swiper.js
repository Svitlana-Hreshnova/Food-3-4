import imageHero from '../images/hero.png'
import imageHero_2 from '../images/hero2.png'
import imageHero_3 from '../images/hero3.png'

const image = [
    imageHero,
    imageHero_2,
    imageHero_3,
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
buttonLeft.addEventListener('click', function () {
    changeImage('left');
});

const buttonRight = document.querySelector('.bttn-arrow-right');
buttonRight.addEventListener('click', function() {
    changeImage('right');
});