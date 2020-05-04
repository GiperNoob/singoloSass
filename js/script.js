const menu = document.getElementById('menu');
menu.addEventListener('click', (event) => {
    menu.querySelectorAll('a').forEach(el => el.classList.remove('navigation__link_active'));
    event.target.classList.add('navigation__link_active');
})

const galleryPictures = document.getElementById('gallery-list');
galleryPictures.addEventListener('click', (event) => {
    galleryPictures.querySelectorAll('img').forEach(el => el.classList.remove('gallery-list__ico_active'));
    event.target.classList.add('gallery-list__ico_active');
})

const galleryButtons = document.getElementById('gallery');
galleryButtons.addEventListener('click', (event) => {
    galleryButtons.querySelectorAll('button').forEach(el => el.classList.remove('portfolio-nav__link_active'));
    event.target.classList.add('portfolio-nav__link_active');

    if (event.target.dataset.type == 'All') {
        showAllPictures();
    } else {
        filterBySelectTag(event.target.dataset.type);
    }
})

const showAllPictures = () => {
    galleryPictures.querySelectorAll('li').forEach(picture => {
        picture.classList.remove('hidden');
    })
}

const filterBySelectTag = (event) => {
    galleryPictures.querySelectorAll('li').forEach(picture => {
        if (picture.dataset.type == event) {
            picture.classList.remove('hidden');
        } else {
            picture.classList.add('hidden');
        }
    })
}

let screenHorizontal = document.getElementById('screenH')
let buttonHorizontal = document.getElementById('circleH');
buttonHorizontal.onclick = function () {
    screenHorizontal.style.display = (screenHorizontal.style.display == 'block') ? 'none' : 'block';

}

let screenVertical = document.getElementById('screenV');
let buttonVertical = document.getElementById('circleV');
buttonVertical.onclick = function () {
    screenVertical.style.display = (screenVertical.style.display == 'block') ? 'none' : 'block';
}
