var image=["./images/hero.png","./images/hero2.png","./images/hero3.png"],currentImageIndex=0;function changeImage(e){"left"===e?currentImageIndex=(currentImageIndex-1+image.length)%image.length:"right"===e&&(currentImageIndex=(currentImageIndex+1)%image.length),document.querySelector(".hero-image").src=image[currentImageIndex]}
//# sourceMappingURL=index.b5623470.js.map
