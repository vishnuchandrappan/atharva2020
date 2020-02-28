const burger = document.querySelector(".burger");
const nav = document.querySelector(".nav-links");
const sections = document.querySelectorAll("section");
var index = 0;

burger.addEventListener("click", () => {
  burger.classList.toggle("burger-active");
  nav.classList.toggle("nav-links-active");

  sections.forEach(section => {
    section.classList.toggle("active");
    popUp.classList.toggle("active");
  });
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


const leftBtn = document.getElementById("left");
const rightBtn = document.getElementById("right");

closeBtn.addEventListener("click", () => {
  popUp.style.display = "none";
});

leftBtn.addEventListener("click", () => {
  if (index != 0) {
    index--;
    if (currentType) {
      setData2();
    } else {
      setData();
    }
  }
});

rightBtn.addEventListener("click", () => {
  if (index != data.length - 1) {
    index++;
    if (currentType) {
      setData2();
    } else {
      setData();
    }
  }
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
      return "GENERAL EVENT";
  }
}

var i = 0;
var j = 0;
var currentType = 0;

if (isWorkshop == 0) {
  data.forEach(item => {
    let el = document.createElement("div");
    el.classList.add("card");
    el.setAttribute("id", item.id);
    el.setAttribute("dataId", i++);
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
    // let description = document.createElement("p");
    // description.classList.add("card-content");
    // description.innerText = item.description;

    el.appendChild(image);
    if (showDeptName === 1) {
      el.appendChild(deptName);
    }
    el.appendChild(name);
    // el.appendChild(description);

    container.appendChild(el);

    init();
  });
}

workshops.forEach(item => {
  let el = document.createElement("div");
  el.classList.add("card");
  el.setAttribute("id", item.id);
  el.setAttribute("workshopId", j++);
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
  // let description = document.createElement("p");
  // description.classList.add("card-content");
  // console.log(item.description);
  // description.innerHTML = item.description;

  el.appendChild(image);
  if (showDeptName === 1) {
    el.appendChild(deptName);
  }
  el.appendChild(name);
  // el.appendChild(description);

  workshopsContainer.appendChild(el);

  init();
});

var currentCard = null;

function init() {
  // const cards = document.querySelectorAll(".card");
    if(!isWorkshop || isSource == 1){
      const cards = document
        .querySelector("#content-page")
        .querySelectorAll(".card");
      cards.forEach(card => {
        card.addEventListener("click", () => {
          index = parseInt(card.getAttribute("dataId"));
          // currentCard = parseInt(card.id);
          currentType = 0;
          setData();
        });
      });
    }

  if(isWorkshop == 1 || isSource == 1){
    const cards2 = document
      .querySelector("#workshop-page")
      .querySelectorAll(".card");
    console.log("asd");

    cards2.forEach(card => {
      card.addEventListener("click", () => {
        index = parseInt(card.getAttribute("workshopID"));
        currentType = 1;
        setData2();
      });
    });
  }
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
  popUpRules.innerHTML = a[0].description;
  popUpPrize.innerText = a[0].prize;
  popUpRegistration.innerText = a[0].registration;
  popUpNum1.innerHTML = "";
  change1.innerText = a[0].number1;
  popUpNum1.appendChild(change1);
  popUpNum2.innerHTML = "";
  popUpImage.setAttribute("src",a[0].image);
  change2.innerText = a[0].number2;
  popUpNum2.appendChild(change2);

  popUp.style.display = "block";
  checkStatus();
}

function setData2() {
  currentCard = workshops[index].id;

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
  popUpRules.innerHTML = a[0].description;
  popUpPrize.innerText = "";
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

const slideBtn = document.getElementById("slide-btn");
const navMenu = document.querySelector(".nav-menu");
slideBtn.addEventListener("click", () => {
  navMenu.classList.toggle("nav-menu-active");
});

const menuLinks = document.querySelectorAll(".menu-links");
menuLinks.forEach(link => {
  link.addEventListener("click", () => {
    navMenu.classList.remove("nav-menu-active");
    popUp.style.display = "none";
  });
});
