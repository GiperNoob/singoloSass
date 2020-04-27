
const menu = document.getElementById('menu');
menu.addEventListener('click', (event) => {
    menu.querySelectorAll('a').forEach(el => el.classList.remove('navigation__link_active'));
    event.target.classList.add('navigation__link_active');
})

const galeryButtons = document.getElementById('galery');
galeryButtons.addEventListener('click', (event) => {
    galeryButtons.querySelectorAll('button').forEach(el => el.classList.remove('portfolio-nav__link_active'));
    event.target.classList.add('portfolio-nav__link_active');
})

const galeryPictures = document.getElementById('gallery-list');
galeryPictures.addEventListener('click', (event) => {
    galeryPictures.querySelectorAll('img').forEach(el => el.classList.remove('gallery-list__ico_active'));
    event.target.classList.add('gallery-list__ico_active');
})
