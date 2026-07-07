/* ===============================
   MOBILE MENU
================================= */

const menuBtn = document.getElementById("menuBtn");
const menu = document.getElementById("menu");

menuBtn.addEventListener("click", () => {
    menu.classList.toggle("active");
});


/* ===============================
   CLOSE MENU WHEN LINK IS CLICKED
================================= */

const navLinks = document.querySelectorAll("#menu a");

navLinks.forEach(link => {

    link.addEventListener("click", () => {

        menu.classList.remove("active");

    });

});


/* ===============================
   STICKY HEADER SHADOW
================================= */

const header = document.querySelector("header");

window.addEventListener("scroll", () => {

    if (window.scrollY > 80) {

        header.style.boxShadow = "0 10px 25px rgba(0,0,0,.15)";
        header.style.background = "rgba(255,255,255,.95)";

    } else {

        header.style.boxShadow = "none";
        header.style.background = "rgba(255,255,255,.85)";

    }

});


/* ===============================
   SCROLL ANIMATION
================================= */

const sections = document.querySelectorAll(
    ".about, .card, .why-box, .review, .gallery img, .contact form"
);

const observer = new IntersectionObserver((entries) => {

    entries.forEach(entry => {

        if (entry.isIntersecting) {

            entry.target.classList.add("show");

        }

    });

}, {
    threshold: 0.2
});

sections.forEach(section => {

    section.classList.add("hidden");
    observer.observe(section);

});


/* ===============================
   CONTACT FORM
================================= */

const form = document.querySelector("form");

form.addEventListener("submit", function (e) {

    e.preventDefault();

    const name = form.querySelector("input[type='text']").value;

    if (name.trim() === "") {

        alert("Please enter your name.");
        return;

    }

    alert("🎉 Thank you " + name + "!\n\nYour message has been sent successfully.");

    form.reset();

});


/* ===============================
   PRODUCT BUTTONS
================================= */

const buttons = document.querySelectorAll(".card button");

buttons.forEach(button => {

    button.addEventListener("click", () => {

        button.innerHTML = "✔ Added";

        button.style.background = "#27ae60";

        setTimeout(() => {

            button.innerHTML = "Add to Cart";

            button.style.background = "";

        }, 2000);

    });

});


/* ===============================
   IMAGE HOVER EFFECT
================================= */

const galleryImages = document.querySelectorAll(".gallery img");

galleryImages.forEach(img => {

    img.addEventListener("mouseenter", () => {

        img.style.transform = "scale(1.08)";

    });

    img.addEventListener("mouseleave", () => {

        img.style.transform = "scale(1)";

    });

});


/* ===============================
   BACK TO TOP BUTTON
================================= */

const topBtn = document.createElement("button");

topBtn.innerHTML = "↑";

topBtn.id = "topBtn";

document.body.appendChild(topBtn);

topBtn.style.position = "fixed";
topBtn.style.bottom = "25px";
topBtn.style.right = "25px";
topBtn.style.width = "50px";
topBtn.style.height = "50px";
topBtn.style.borderRadius = "50%";
topBtn.style.border = "none";
topBtn.style.cursor = "pointer";
topBtn.style.fontSize = "22px";
topBtn.style.display = "none";
topBtn.style.background = "#b56a3f";
topBtn.style.color = "white";
topBtn.style.boxShadow = "0 10px 20px rgba(0,0,0,.2)";
topBtn.style.zIndex = "1000";

window.addEventListener("scroll", () => {

    if (window.scrollY > 500) {

        topBtn.style.display = "block";

    } else {

        topBtn.style.display = "none";

    }

});

topBtn.addEventListener("click", () => {

    window.scrollTo({

        top: 0,

        behavior: "smooth"

    });

});


/* ===============================
   CURRENT YEAR (OPTIONAL)
================================= */

const copy = document.querySelector(".copy");

if (copy) {

    copy.innerHTML =
        `© ${new Date().getFullYear()} Sweet Crumbs Bakery. All Rights Reserved.`;

}