const menuButton = document.querySelector(".menu-button");
const sideMenu = document.querySelector(".side-menu");
const closeButton = document.querySelector(".close-button");

menuButton.addEventListener("click", () => {
    sideMenu.classList.add("open");
});

closeButton.addEventListener("click", () => {
    sideMenu.classList.remove("open");
});