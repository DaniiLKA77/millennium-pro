// js/active-menu.js

document.addEventListener("DOMContentLoaded", () => {
  const currentPath = window.location.pathname.split("/").pop();
  const links = document.querySelectorAll(".nav-links li a");

  links.forEach(link => {
    const linkPath = link.getAttribute("href");
    if (linkPath === currentPath) {
      link.parentElement.classList.add("active");
    }
  });
});
