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
      return "HOXOVO";
    case "CE":
      return "TRANQUILLUM";
    case "EEE":
      return "EXOUSIA";
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
  currentCard = data[index].id;

  if (currentCard >= 1000) {
    var a = workshops.filter(obj => {
      return obj.id === currentCard;
    });
  } else {
    var a = data.filter(obj => {
      return obj.id === currentCard;
    });
  }

  let change1 = document.createElement("a");
  let num = a[0].number1.split(":");
  change1.setAttribute("href", "tel:+91" + num[1]);

  let change2 = document.createElement("a");
  let num2 = a[0].number2.split(":");
  change2.setAttribute("href", "tel:+91" + num[1]);

  itemName.innerText = a[0].name;
  popUpRules.innerText = a[0].description;
  popUpPrize.innerText = a[0].prize;
  popUpRegistration.innerText = a[0].registration;
  popUpNum1.innerHTML = "";
  change1.innerText = a[0].number1;
  popUpNum1.appendChild(change1);
  popUpNum2.innerHTML = "";
  change2.innerText = a[0].number2;
  popUpNum2.appendChild(change2);

  popUp.style.display = "block";
  checkStatus();
}

const leftBtn = document.getElementById("left");
const rightBtn = document.getElementById("right");
var index = 0;

function checkStatus() {
  if (index == 0) {
    leftBtn.classList.add("disabled");
  } else {
    leftBtn.classList.remove("disabled");
  }
  if (index == data.length - 1) {
    rightBtn.classList.add("disabled");
  } else {
    rightBtn.classList.remove("disabled");
  }
}

leftBtn.addEventListener("click", () => {
  if (index != 0) {
    index--;
    setData();
  }
  // if (currentCard != data[0].id) {
  //   index--;
  //   currentCard--;
  // }
});

rightBtn.addEventListener("click", () => {
  if (index != data.length - 1) {
    index++;
    setData();
  }
  // if (currentCard != data[data.length-1].id) {
  //   currentCard = data[1].id;
  //   setData();
  // }
});

const slideBtn = document.getElementById("slide-btn");
const navMenu = document.querySelector(".nav-menu");
slideBtn.addEventListener("click", () => {
  navMenu.classList.toggle("nav-menu-active");
});

const menuLinks = document.querySelectorAll(".menu-links");
menuLinks.forEach(link => {
  link.addEventListener("click", () => {
    navMenu.classList.remove("nav-menu-active");
  });
});
