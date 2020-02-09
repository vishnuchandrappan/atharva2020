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
  el.setAttribute("id", item.id);
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
const itemName = document.getElementById("pop-up-name");
const popUpPrize = document.getElementById("pop-up-prize");
const popUpImage = document.getElementById("pop-up-image");
const popUpRegistration = document.getElementById("pop-up-registration");
const popUpRules = document.getElementById("pop-up-rules");

closeBtn.addEventListener("click", () => {
  popUp.style.display = "none";
});

var currentCard = null;

function init() {
  const cards = document.querySelectorAll(".card");
  cards.forEach(card => {
    card.addEventListener("click", () => {
      currentCard = parseInt(card.id);
      setData();
    });
  });
}

function setData() {
  var a = data.filter(obj => {
    return obj.id === currentCard;
  });

  itemName.innerText = a[0].name;
  popUpRules.innerText = a[0].description;
  popUpPrize.innerText = a[0].prize;
  popUpRegistration.innerText = a[0].registration;

  popUp.style.display = "block";
}

const leftBtn = document.getElementById("left");
const rightBtn = document.getElementById("right");

leftBtn.addEventListener("click", () => {
  if(currentCard!=data[0].id){
    currentCard--;
    setData();
  }
});

rightBtn.addEventListener("click", () => {
  if(currentCard!=data.length){
    currentCard++;
    setData();
  }
});
