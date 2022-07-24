const acceuilContainer = document.querySelector(".accueil-container");
const pkoiContent = document.querySelector(".pkoi-content");
const Asavoir = document.getElementById("Asavoir");
const Acceder = document.getElementById("Acceder");
const Prendre = document.getElementById("Prendre");
const arrow = document.getElementById("arrow");
const linkDead = document.querySelectorAll(".link-dead");
const btnBurger = document.querySelector(".btn-burger");
const navBurger = document.querySelector(".nav-burger");
const burgerSubMenu = document.querySelector(".burger-sub-menu");
const burgerSubMenu2 = document.querySelector(".burger-sub-menu2");
const barPositif = document.querySelector(".bar-positive");
const barNegatif = document.querySelector(".bar-negative");
let valide = false;

/********************scroll function for text appearance ************/
window.addEventListener("scroll", () => {
  console.log(window.scrollY);
  if (window.scrollY > 813 || (window.scrollY >= 813 && window.onload)) {
    acceuilContainer.classList.add("active");
  }
  if (window.scrollY > 1700 || (window.scrollY >= 1700 && window.onload)) {
    pkoiContent.classList.add("active");
  }
  if (window.scrollY > 2600 || (window.scrollY >= 2600 && window.onload)) {
    Asavoir.classList.add("active");
    Acceder.classList.add("active");
    Prendre.classList.add("active");
    btnBurger.style.border = "2px solid white";
  } else {
    btnBurger.style.border = "none";
  }
  if (window.scrollY > 746) {
    arrow.classList.add("active");
  } else {
    arrow.classList.remove("active");
  }
});

/*************************function broken links**********************/
linkDead.forEach((link) => {
  // console.log(link);
  link.addEventListener("click", (e) => {
    e.preventDefault();
    console.log(e);
    alert("Désolé! le lien n'est pas relié");
  });
});

/**************************function Sub-menu burger******************/
btnBurger.addEventListener("click", () => {
  // console.log("tutu");
  btnBurger.classList.toggle("active");
  navBurger.classList.toggle("active");
  btnBurger.classList.toggle("mouve");
});

barNegatif.addEventListener("click", () => {
  burgerSubMenu.classList.add("active");
  burgerSubMenu2.classList.add("active");
  barPositif.classList.add("active");
  barNegatif.classList.add("active");
});

barPositif.addEventListener("click", () => {
  barNegatif.classList.remove("active");
  barPositif.classList.remove("active");
  burgerSubMenu.classList.remove("active");
  burgerSubMenu2.classList.remove("active");
});
/****************function on opening popup***************************/
document.querySelector(".crossCheck").addEventListener("click", () => {
  document.getElementById("popupContainer").style.display = "none";
  document.querySelector("body").classList.add("active");
});
