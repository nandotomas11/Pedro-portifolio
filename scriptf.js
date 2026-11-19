const menuToggle = document.getElementById("menuToggle");
const siteNav = document.getElementById("siteNav");
const navItems = siteNav.querySelectorAll("a");

menuToggle.addEventListener("click", () => {
  const isOpen = siteNav.classList.toggle("open");
  menuToggle.setAttribute("aria-expanded", String(isOpen));
});

// Fecha o menu automaticamente ao clicar em algum link
navItems.forEach((link) => {
  link.addEventListener("click", () => {
    siteNav.classList.remove("open");
    menuToggle.setAttribute("aria-expanded", "false");
  });
});

// Fecha o menu ao clicar fora dele
document.addEventListener("click", (event) => {
  if (!event.target.closest(".site-header")) {
    siteNav.classList.remove("open");
    menuToggle.setAttribute("aria-expanded", "false");
  }
});






