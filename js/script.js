'use strict';

let menuBtn = document.querySelector('.main-side-bar-hamburger');
let menuSideBar = document.querySelector('.main-side-bar');
let menuUl = document.querySelector('ul');
let menuLogo = document.querySelector('.main-logo');

menuBtn.addEventListener('click', function() {
    menuBtn.classList.toggle('open');
    menuSideBar.classList.toggle('open');
    menuUl.classList.toggle('open');
    menuUl.classList.toggle('li');
    menuLogo.classList.toggle('open');
})

// function toggleLogo() {
//     if (menuLogo.classList.contains('open')) {
//         menuLogo.classList.remove('open');
//     } else {
//         menuLogo.classList.add('open');
//       }
// }
