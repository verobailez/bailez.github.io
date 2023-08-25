/*Inicio Barra de Busqueda*/
let searchbtn = document.querySelector('#search-btn');
let searchform = document.querySelector('.header .search-form');

searchbtn.onclick = () => {
    searchbtn.classList.toggle('fa-times');
    searchform.classList.toggle('active');
}
/*Fin Barra de Busqueda*/

/*Inicio Barra de Menu*/
let menu = document.querySelector('#menu-btn');
let navbar = document.querySelector('.header .navbar');

menu.onclick = () => {
    menu.classList.toggle('fa-times');
    navbar.classList.toggle('active');

    searchbtn.classList.remove('fa-times');
    searchform.classList.remove('active');
}
/*Fin Barra de Menu*/

window.onscroll = () => {
    searchbtn.classList.remove('fa-times');
    searchform.classList.remove('active');
    menu.classList.remove('fa-times');
    navbar.classList.remove('active');
}

/*Inicio Home*/
let slides = document.querySelectorAll('.home .slide');
let index = 0;

function next() {
    slides[index].classList.remove('active');
    index = (index + 1) % slides.length;
    slides[index].classList.add('active');
}

function prev() {
    slides[index].classList.remove('active');
    index = (index - 1 + slides.length) % slides.length;
    slides[index].classList.add('active');
}
/*Fin Home*/




