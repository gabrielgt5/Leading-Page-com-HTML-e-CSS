const menuToggle = document.getElementById("menuToggle");
const menuMobile = document.getElementById("navbarMobile")

menuToggle.addEventListener("click", () => {
    if(menuMobile.style.display === "none"){
        menuMobile.style.display ="flex"
    } else {
        menuMobile.style.display = 'none';
    }

})