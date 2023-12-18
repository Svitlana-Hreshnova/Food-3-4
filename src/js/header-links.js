const headerLinks = document.querySelectorAll('.nav-link');
headerLinks.forEach(link => {
    link.addEventListener('click', addClass);
})

function addClass(e) {
    headerLinks.forEach(link => {
        link.classList.remove('active')
    });
    e.target.classList.add('active')
};