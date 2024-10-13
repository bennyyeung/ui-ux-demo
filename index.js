window.addEventListener("scroll", function () {
    const navbar = document.getElementById("navbar");
    if (window.scrollY > 50) { // Adjust the number for when the effect should trigger
        navbar.classList.add("scrolled");
    } else {
        navbar.classList.remove("scrolled");
    }
});
 
document.getElementById("contactBtn").addEventListener("click", function () {
    document.getElementById("contact").scrollIntoView({ behavior: "smooth" });
});