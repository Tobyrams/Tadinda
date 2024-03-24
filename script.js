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
