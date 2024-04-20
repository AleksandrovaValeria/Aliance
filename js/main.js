const navbar = document.querySelector(".navbar");

const lightModeOn = () => {
  navbar.classList.add("navbar-light");
};

const lightModeOff = () => {
  navbar.classList.remove("navbar-light");
};

window.addEventListener("scroll", () => {
  this.scrollY > 1 ? lightModeOn() : lightModeOff();
});

// Mobile menu
const mobile_menu_btn = document.querySelector(".mobile-menu-toggle");
const mobile_menu_block = document.querySelector(".mobile-menu");

const openMenu = () => {
  mobile_menu_block.classList.add("is-open");
  mobile_menu_btn.classList.add("btn-close");
  lightModeOn();
  document.body.style.overflowY = "hidden";
};

const closeMenu = () => {
  mobile_menu_block.classList.remove("is-open");
  mobile_menu_btn.classList.remove("btn-close");
  lightModeOff();
  document.body.style.overflowY = "auto";
};

mobile_menu_btn.addEventListener("click", (e) => {
  e.preventDefault();
  mobile_menu_block.classList.contains("is-open") ? closeMenu() : openMenu();
});

// Slider features
const swiperFeature = new Swiper('.features-slider', {
  slidesPerView: "auto",
  
  // Navigation arrows
  navigation: {
    nextEl: '.features-slider-button-next',
    prevEl: '.features-slider-button-prev',
  },

  breakpoints: {
    530: {
      slidesPerView: 2,
    },
    768: {
      slidesPerView: 3,
    },
    900: {
      slidesPerView: 4,
    },
    1200: {
      slidesPerView: 5,
    }
  }
});

// Slider step
const swiperStep = new Swiper('.steps-slider', {
  slidesPerView: "auto",
  spaceBetween: 30,
  
  // Navigation arrows
  navigation: {
    nextEl: '.step-button-next',
    prevEl: '.step-button-prev',
  },

  breakpoints: {
    576: {
      slidesPerView: 2,
    },
    900: {
      slidesPerView: 3,
    },
    1200: {
      slidesPerView: 4,
    }
  }
});

// Slider blog
const swiperBlog = new Swiper('.blog-slider', {
  slidesPerView: 1,
  spaceBetween: 30,
  
  // Navigation arrows
  navigation: {
    nextEl: '.blog-button-next',
    prevEl: '.blog-button-prev',
  },

  breakpoints: {
    900: {
      slidesPerView: 2,
    }
  }
});