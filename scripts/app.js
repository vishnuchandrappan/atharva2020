const burger = document.querySelector(".burger");
const nav = document.querySelector(".nav-links");
const sections = document.querySelectorAll("section");

burger.addEventListener("click", () => {
  burger.classList.toggle("burger-active");
  nav.classList.toggle("nav-links-active");

  sections.forEach(section => {
    section.classList.toggle("active");
    popUp.classList.toggle("active");
  });
});

const container = document.querySelector("#content-page .card-container");
const workshopsContainer = document.querySelector(
  "#workshop-page .card-container"
);

function setDeptName(code) {
  switch (code) {
    case "MECH":
      return "MEXURGE";
    case "CSEIT":
      return "TECHNAURA";
    case "EC":
      return "EXOUSIA";
    case "CE":
      return "TRANQUILLUM";
    case "EEE":
      return "ANALETA";
    default:
      break;
  }
}

data.forEach(item => {
  let el = document.createElement("div");
  el.classList.add("card");
  el.setAttribute("id", item.id);
  let image = document.createElement("img");
  image.setAttribute("src", item.image);
  image.classList.add("card-img");
  if (showDeptName === 1) {
    var deptName = document.createElement("h2");
    deptName.classList.add("dept-name");
    deptName.innerText = setDeptName(item.department);
  }
  let name = document.createElement("h3");
  name.innerText = item.name;
  name.classList.add("card-title");
  let description = document.createElement("p");
  description.classList.add("card-content");
  description.innerText = item.description;

  el.appendChild(image);
  if (showDeptName === 1) {
    el.appendChild(deptName);
  }
  el.appendChild(name);
  el.appendChild(description);

  container.appendChild(el);

  init();
});

workshops.forEach(item => {
  let el = document.createElement("div");
  el.classList.add("card");
  el.setAttribute("id", item.id);
  let image = document.createElement("img");
  image.setAttribute("src", item.image);
  image.classList.add("card-img");
  if (showDeptName === 1) {
    var deptName = document.createElement("h2");
    deptName.classList.add("dept-name");
    deptName.innerText = setDeptName(item.department);
  }
  let name = document.createElement("h3");
  name.innerText = item.name;
  name.classList.add("card-title");
  let description = document.createElement("p");
  description.classList.add("card-content");
  description.innerText = item.description;

  el.appendChild(image);
  if (showDeptName === 1) {
    el.appendChild(deptName);
  }
  el.appendChild(name);
  el.appendChild(description);

  workshopsContainer.appendChild(el);

  init();
});

const closeBtn = document.querySelector(".fa-times").parentElement;
const popUp = document.querySelector(".pop-up");
const itemName = document.getElementById("pop-up-name");
const popUpPrize = document.getElementById("pop-up-prize");
const popUpImage = document.getElementById("pop-up-image");
const popUpRegistration = document.getElementById("pop-up-registration");
const popUpRules = document.getElementById("pop-up-rules");
const popUpNum1 = document.getElementById("pop-up-number1");
const popUpNum2 = document.getElementById("pop-up-number2");

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
  if(currentCard>=1000){
    var a = workshops.filter(obj => {
      return obj.id === currentCard;
    });
  }
  else{
    var a = data.filter(obj => {
      return obj.id === currentCard;
    });
  }

  itemName.innerText = a[0].name;
  popUpRules.innerText = a[0].description;
  popUpPrize.innerText = a[0].prize;
  popUpRegistration.innerText = a[0].registration;
  popUpNum1.innerText = a[0].number1;
  popUpNum2.innerText = a[0].number2;

  popUp.style.display = "block";
}

const leftBtn = document.getElementById("left");
const rightBtn = document.getElementById("right");

leftBtn.addEventListener("click", () => {
  if (currentCard != data[0].id) {
    currentCard--;
    setData();
  }
});

rightBtn.addEventListener("click", () => {
  if (currentCard != data.length) {
    currentCard++;
    setData();
  }
});

const slideBtn = document.getElementById('slide-btn');
const navMenu = document.querySelector('.nav-menu');
slideBtn.addEventListener("click", () => {
  navMenu.classList.toggle("nav-menu-active");
});

const menuLinks = document.querySelectorAll('.menu-links');
menuLinks.forEach(link => {
  link.addEventListener("click", () => {
    navMenu.classList.remove("nav-menu-active");
  });
});
