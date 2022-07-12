const burgerIcon = document.querySelector(".burger");
const navBar = document.querySelector(".nav");

burgerIcon.addEventListener("click", function () {
    navBar.classList.toggle("active")
})