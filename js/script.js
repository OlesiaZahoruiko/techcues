'use strict'


const burgerBtn = document.getElementById('burger-btn');
const headerMenu = document.getElementById('header__menu');

burgerBtn.addEventListener('click', function () {
  headerMenu.classList.toggle('active');
  burgerBtn.classList.toggle('open');
  document.body.classList.toggle('lock');
});