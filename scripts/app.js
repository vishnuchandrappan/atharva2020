const burger = document.querySelector(".burger");
const nav = document.querySelector(".nav-links");
const sections = document.querySelectorAll("section");

burger.addEventListener("click", () => {
  burger.classList.toggle("burger-active");
  nav.classList.toggle("nav-links-active");

  sections.forEach(section => {
    section.classList.toggle("active");
  });
});

const container = document.querySelector(".card-container");

data.forEach(item => {
  let el = document.createElement("div");
  el.classList.add("card");
  let image = document.createElement("img");
  image.setAttribute("src", item.image);
  image.classList.add("card-img");
  let name = document.createElement("h3");
  name.innerText = item.name;
  name.classList.add("card-title");
  let description = document.createElement("p");
  description.classList.add("card-content");
  description.innerText = item.description;

  el.appendChild(image);
  el.appendChild(name);
  el.appendChild(description);

  container.appendChild(el);

  init();
});

const closeBtn = document.querySelector(".fa-times");
const popUp = document.querySelector(".pop-up");

closeBtn.addEventListener("click", () => {
  popUp.style.display = "none";
});

function init(){
  const cards = document.querySelectorAll(".card");
  cards.forEach(card => {
    card.addEventListener("click", () => {
      popUp.style.display = "block";
    });
  });
};
