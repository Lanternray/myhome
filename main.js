const menu = document.querySelector('.menu');
const hiddenMenu = document.querySelector('.hidden-menu');

menu.addEventListener('click', () => {
  menu.classList.toggle('active');
  hiddenMenu.classList.toggle('active');
});