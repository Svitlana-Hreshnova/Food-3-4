var image=["./images/hero.png","./images/hero2.png","./images/hero3.png"],currentImageIndex=0;function changeImage(e){"left"===e?currentImageIndex=(currentImageIndex-1+image.length)%image.length:"right"===e&&(currentImageIndex=(currentImageIndex+1)%image.length),document.querySelector(".hero-image").src=image[currentImageIndex]}var buttonLeft=document.querySelector(".bttn-arrow-left");buttonLeft.addEventListener("click",changeImage("left"));var buttonRight=document.querySelector(".bttn-arrow-right");buttonRight.addEventListener("click",changeImage("right"));
//# sourceMappingURL=index.3d94cb39.js.map