const menuButton = document.getElementById("menu-button");
const closeButton = document.getElementById("close-button");
const overlay = document.getElementById("menu-overlay");

menuButton.addEventListener("click", function () {
    overlay.classList.add("active");
})

closeButton.addEventListener("click", function () {
    overlay.classList.remove("active");
})