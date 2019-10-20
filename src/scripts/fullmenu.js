let burger = document.querySelector('.hamburger-menu');
let overlay = document.querySelector('.header__menu');
// let body = document.querySelector('body');

let links = document.querySelectorAll('.menu__link');

links.forEach(function(element) {
    element.addEventListener('click', toggleMenu);
})

function toggleMenu() {
    burger.classList.toggle('hamburger-menu--active');
    overlay.classList.toggle('header__menu--active');
    // body.classList.toggle('body--active');
}

burger.addEventListener('click', toggleMenu);