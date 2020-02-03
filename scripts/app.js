const burger = document.querySelector('.burger');
const nav = document.querySelector('.nav-links');
const sections = document.querySelectorAll('section');

burger.addEventListener("click", () => {
    burger.classList.toggle('burger-active');
    nav.classList.toggle('nav-links-active');

    sections.forEach(section => {
        section.classList.toggle('active');
    });
});

const cards = document.querySelectorAll('.card');
cards.forEach(card => {
    // card.addEventListener("click",() => {
    //     card.classList.toggle("card-active");
    // });
});
