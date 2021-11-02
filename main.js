const navToggle = document.querySelector(".nav-toggle");
const navToggleIcon = document.getElementById("nav-toggle-icon");
const navMenu = document.querySelector(".mobile-nav");
const navLinks = document.querySelectorAll(".enlaces");

navToggle.addEventListener("click", () =>{
    navMenu.classList.toggle("nav-menu--visible");
    navToggleIcon.classList.toggle("fa-times");
})

for(let i = 0; i < navLinks.length; i++) {
    navLinks[i].addEventListener("click", ()=>{
        navMenu.classList.remove("nav-menu--visible");
        navToggleIcon.classList.remove("fa-times");
    })
}