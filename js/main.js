const navbar = document.querySelector(".navbar");
const navbar_logo = navbar.querySelector(".navbar-logo use");
window.addEventListener("scroll", () => {
  if (this.scrollY > 1) {
    navbar.classList.add("navbar-light");
    navbar_logo.href.baseVal = "img/sprite.svg#logo-dark";
  } else {
    navbar.classList.remove("navbar-light");
    navbar_logo.href.baseVal = "img/sprite.svg#logo-light";
  }
});

// Mobile menu
const mobile_menu_btn = document.querySelector(".mobile-menu-toggle");
const mobile_menu_block = document.querySelector(".mobile-menu");
mobile_menu_btn.addEventListener("click", (e) => {
  e.preventDefault();
  mobile_menu_block.classList.toggle("is-open")
});
