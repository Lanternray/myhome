const menu = document.querySelector('.menu');
const hiddenMenu = document.querySelector('.hidden-menu');

if (menu && hiddenMenu) {
  menu.addEventListener('click', () => {
    const isOpen = menu.classList.toggle('active');

    hiddenMenu.classList.toggle('active', isOpen);
    menu.setAttribute('aria-expanded', String(isOpen));
  });
}
