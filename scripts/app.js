const burger = document.querySelector('.burger');
const nav = document.querySelector('.nav-links');

burger.addEventListener("click", () => {
    burger.classList.toggle('burger-active');
    nav.classList.toggle('nav-links-active');
});
