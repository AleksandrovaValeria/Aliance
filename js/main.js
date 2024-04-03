const navbar = document.querySelector(".navbar");
const navbar_logo = navbar.querySelector(".navbar-logo use");

const lightModeOn = () => {
  navbar.classList.add("navbar-light");
  navbar_logo.href.baseVal = "img/sprite.svg#logo-dark";
};

const lightModeOff = () => {
  navbar.classList.remove("navbar-light");
  navbar_logo.href.baseVal = "img/sprite.svg#logo-light";
};

window.addEventListener("scroll", () => {
  this.scrollY > 1 ? lightModeOn() : lightModeOff();
});

// Mobile menu
const mobile_menu_btn = document.querySelector(".mobile-menu-toggle");
const mobile_menu_block = document.querySelector(".mobile-menu");

const openMenu = () => {
  console.log("open-menu");
  mobile_menu_block.classList.add("is-open");
  mobile_menu_btn.classList.add("btn-close");
  lightModeOn();
  document.body.style.overflowY = "hidden";
};

const closeMenu = () => {
  console.log("close-menu");
  mobile_menu_block.classList.remove("is-open");
  mobile_menu_btn.classList.remove("btn-close");
  lightModeOff();
  document.body.style.overflowY = "auto";
};

mobile_menu_btn.addEventListener("click", (e) => {
  e.preventDefault();
  mobile_menu_block.classList.contains("is-open") ? closeMenu() : openMenu();
});
