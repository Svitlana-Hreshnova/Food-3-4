import iconClose from '../images/icons.svg';
import Home from '../index.html';

const mobileMenuTriggerButton = document.querySelector('.js-open-menu');
mobileMenuTriggerButton.addEventListener('click', createMobileMenu);

function createMobileMenu() {
  const mobileMenu = document.createElement('div');
  mobileMenu.classList.add('mb-menu');
  document.body.appendChild(mobileMenu);

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
    { text: 'Home', link: Home },
    { text: 'About', link: '#about' },
    { text: 'Service', link: '#service' },
    { text: 'Menu', link: '#menu' },
    { text: 'Contact', link: '#contact' },
  ];

  menuItems.forEach(item => {
    const mobileMenuListItem = document.createElement('li');
    mobileMenuListItem.classList.add('mb-menu-item');
    mobileMenuList.appendChild(mobileMenuListItem);

    const mobileMenuLink = document.createElement('a');
    mobileMenuLink.classList.add('link', 'mb-menu-link');
    mobileMenuLink.href = item.link;
    mobileMenuLink.textContent = item.text;
    mobileMenuListItem.appendChild(mobileMenuLink);
  });

  window.addEventListener('keydown', e => {
    if (e.key === 'Escape') {
      closeMobileMenu();
    }
  });

  document.body.style.overflow = 'hidden';

  const burgerMenuIcon = mobileMenuTriggerButton.querySelector('.burger-menu');

  burgerMenuIcon.style.fill = 'var(--YellowMain)';

  document.addEventListener('click', handleClickOutside);

  function handleClickOutside(e) {
    const isClickInsideMobileMenu = mobileMenu.contains(e.target);
    const isClickInsideTriggerButton = mobileMenuTriggerButton.contains(
      e.target
    );
    if (!isClickInsideMobileMenu && !isClickInsideTriggerButton) {
      closeMobileMenu();
      document.removeEventListener('click', handleClickOutside);
    }
  }

  function handleContentClick(e) {
    e.stopPropagation();
  }

  mobileMenu.addEventListener('click', handleContentClick);

  function closeMobileMenu() {
    mobileMenuButton.removeEventListener('click', closeMobileMenu);
    mobileMenu.removeEventListener('click', handleContentClick);
    window.removeEventListener('keydown', e => {
      if (e.key === 'Escape') {
        closeMobileMenu();
      }
    });
    burgerMenuIcon.style.fill = 'var(--DarkGreen)';
    mobileMenu.remove();
    document.body.style.overflow = 'auto';
  }
}
