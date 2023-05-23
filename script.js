const menu = document.querySelector('#menu-icon');
const nav = document.querySelector('.navbar-links');

menu.onclick = () => {
  menu.classList.toggle('bx-x');
  nav.classList.toggle('open-menu');
};

window.onscroll = () => {
  menu.classList.remove('bx-x');
  nav.classList.remove('open-menu');
};