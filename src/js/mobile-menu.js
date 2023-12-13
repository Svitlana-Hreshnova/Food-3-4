import iconClose from '../images/icons.svg';

function createModal() {
    const mobileMenuBackdrop = document.createElement('div');
    mobileMenuBackdrop.addEventListener('click', closeMobileMenu);
    document.body.appendChild(mobileMenuBackdrop);

    const mobileMenu = document.createElement('div');
    mobileMenu.classList.add('mb-menu');
    mobileMenuBackdrop.appendChild(mobileMenu);

    const mobileMenuButton = document.createElement('button');
    mobileMenuButton.classList.add('mb-menu-button');
    mobileMenuButton.innerHTML = `
    <svg class="icon-close" width="11" height="11">
        <use href="${iconClose}#icon-close"></use>
    </svg>
    `;
    mobileMenuButton.addEventListener('click', closeMobileMenu);
    mobileMenu.appendChild(mobileMenuButton);

    const mobileMenuList = document.createElement('ul');
    mobileMenuList.classList.add('list', 'mb-menu-list');
    mobileMenu.appendChild(mobileMenuList);

    const menuItems = [
        { text: 'Home', link: '../index.html' },
        { text: 'About', link: '#about' },
        { text: 'Service', link: '#service' },
        { text: 'Menu', link: '#menu' },
        { text: 'Contact', link: '#contact' },
    ]

    menuItems.forEach(item => {
        const mobileMenuListItem = document.createElement('li');
        mobileMenuListItem.classList.add('mb-menu-item')
        mobileMenuList.appendChild(mobileMenuListItem)

        const mobileMenuLink = document.createElement('a');
        mobileMenuLink.classList.add('link', 'mb-menu-link');
        mobileMenuLink.href = item.link;
        mobileMenuLink.textContent = item.text;
        mobileMenuListItem.appendChild(mobileMenuLink);
    })

    window.addEventListener('keydown', e => {
        if (e.key === 'Escape') {
            closeMobileMenu()
        }
    });

    document.body.style.overflow = 'hidden';
}

function closeMobileMenu() {
    mobileMenuBackdrop.removeEventListener('click', closeMobileMenu);
    mobileMenuButton.removeEventListener('click', closeMobileMenu)
    window.removeEventListener('keydown', e => {
        if (e.key === 'Escape') {
            closeMobileMenu();
        }
    });
    mobileMenuBackdrop.remove()
    document.body.style.overflow = 'auto'
}

createModal()