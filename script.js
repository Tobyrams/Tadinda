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
