window.addEventListener("scroll", function () {
    this.document
        .querySelector("nav")
        .classList.toggle("window-scroll", this.window.scrollY > 0);
});

const faqs = document.querySelectorAll(".faq");

faqs.forEach((faq) => {
    faq.addEventListener("click", (e) => {
        faq.querySelector(".faq__answer p").classList.toggle("open");

        const icon = faq.querySelector(".icon");
        if (icon.textContent.trim() === "add") {
            icon.textContent = "remove";
        } else {
            icon.textContent = "add";
        }
    });
});

// Toggle menu
const nav_menu = document.querySelector(".nav__menu");
const open_menu = document.querySelector("#open-menu");
const close_menu = document.querySelector("#close-menu");

open_menu.addEventListener("click", (e) => {
    nav_menu.style.display = "block";
    open_menu.style.display = "none";
    close_menu.style.display = "inline-block";
});

close_menu.addEventListener("click", (e) => {
    nav_menu.style.display = "none";
    open_menu.style.display = "inline-block";
    close_menu.style.display = "none";
});
