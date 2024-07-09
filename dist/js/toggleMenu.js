const headernav = document.querySelector('.header__nav');
const toggleMenu = document.querySelector('.toggle__menu');
const backDrop = document.querySelector('.backdrop');

toggleMenu.addEventListener('click', ()=>{
    headernav.classList.toggle('open');
    toggleMenu.classList.toggle('open');
    backDrop.classList.toggle('open');
})