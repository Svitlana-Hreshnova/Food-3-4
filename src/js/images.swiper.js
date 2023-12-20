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