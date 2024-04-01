// When the hamburger menu is click on the appropriate screen size
function toggleMenu() {
  const menu = document.querySelector(".menu-links");
  const icon = document.querySelector(".hamburger-icon");
  menu.classList.toggle("open");
  icon.classList.toggle("open");
}

// This will open a new page
function openInNewTab(url) {
  window.open(url, "_blank");
}

// Menu Heading arrow annimation
document.addEventListener("DOMContentLoaded", () => {
  const menuHeading = document.querySelector(".Menu-Arrow");
  menuHeading.classList.add("bounce-infinate");
  document.body.appendChild(bounce);
});
// Home page Hero arrow animation 5 times
document.addEventListener("DOMContentLoaded", () => {
  const heroArrow = document.querySelector(".arrow-down-icon");
  heroArrow.classList.add("bounce-5");
  document.body.appendChild(bounce);
});

// Scroll to top button⬇

//Get the button
var mybutton = document.getElementById("backToTop");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  if (
    document.body.scrollTop > 700 ||
    document.documentElement.scrollTop > 700
  ) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}

// SwiperJS //
let swiperCards = new Swiper(".card__content", {
  loop: true,
  spaceBetween: 50,
  grabCursor: true,

  pagination: {
    el: ".swiper-pagination",
    clickable: true,
    dynamicBullets: true,
  },

  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },

  breakpoints: {
    600: {
      slidesPerView: 2,
    },
    968: {
      slidesPerView: 3,
    },
  },
});

document.addEventListener("DOMContentLoaded", function () {
  const images = [
    "Imgs/About-Slider-Images/Inside-1-img.jpg",
    "Imgs/About-Slider-Images/Tadinda-Outside.jpeg",
    "Imgs/One.jpg",
    "Imgs/About-Slider-Images/Rumi-Pide-3-img.jpg",
    "Imgs/Tadinda-Shelf.jpg",
  ];
  let currentIndex = 0;

  function changeBackground() {
    const heroElement = document.querySelector(".hero-bg");
    heroElement.style.backgroundImage = `url(${images[currentIndex]})`;
    currentIndex = (currentIndex + 1) % images.length; // Loop back to the first image
  }

  changeBackground(); // Change background for the first time immediately
  setInterval(changeBackground, 5000); // Change background every 5 seconds
});
