var typed = new Typed('#element', {
    strings: ['<i>FrontEnd Developer</i>', ' <i>MERN Developer</i>', ' <i>Competitive Programmer</i>'],
    typeSpeed:100,
    backSpeed:100,
    backDelay:1000,
    loop:true
});

const menuIcon = document.querySelector('#menu-icon');
const navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active')
}