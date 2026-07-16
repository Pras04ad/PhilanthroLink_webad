// =============================
// PHILANTHROLINK LANDING PAGE
// =============================

// Smooth Scrolling
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener("click", function (e) {
        e.preventDefault();

        const target = document.querySelector(this.getAttribute("href"));

        if (target) {
            target.scrollIntoView({
                behavior: "smooth"
            });
        }
    });
});


// =============================
// Navbar Shadow
// =============================

const navbar = document.querySelector("nav");

window.addEventListener("scroll", () => {

    if (window.scrollY > 40) {

        navbar.classList.add("nav-shadow");

    } else {

        navbar.classList.remove("nav-shadow");

    }

});


// =============================
// Active Navigation
// =============================

const sections = document.querySelectorAll("section[id]");
const navLinks = document.querySelectorAll("nav a");

window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach(section => {

        const sectionTop = section.offsetTop - 120;

        if (window.scrollY >= sectionTop) {
            current = section.getAttribute("id");
        }

    });

    navLinks.forEach(link => {

        link.classList.remove("active-link");

        if (link.getAttribute("href") === "#" + current) {

            link.classList.add("active-link");

        }

    });

});


// =============================
// Fade In Animation
// =============================

const observer = new IntersectionObserver((entries) => {

    entries.forEach(entry => {

        if (entry.isIntersecting) {

            entry.target.classList.add("show");

        }

    });

}, {

    threshold: 0.15

});

document.querySelectorAll("section").forEach(section => {

    section.classList.add("hidden");

    observer.observe(section);

});


// =============================
// Screenshot Lightbox
// =============================

const galleryImages = document.querySelectorAll(".gallery img");

const lightbox = document.createElement("div");

lightbox.id = "lightbox";

document.body.appendChild(lightbox);

galleryImages.forEach(image => {

    image.addEventListener("click", () => {

        lightbox.classList.add("active");

        const img = document.createElement("img");

        img.src = image.src;

        while (lightbox.firstChild) {

            lightbox.removeChild(lightbox.firstChild);

        }

        lightbox.appendChild(img);

    });

});

lightbox.addEventListener("click", () => {

    lightbox.classList.remove("active");

});


// =============================
// Floating Phone Animation
// =============================

const phone = document.querySelector(".phone");

if (phone) {

    let direction = 1;

    setInterval(() => {

        direction *= -1;

        phone.animate([
            {
                transform: "translateY(0px)"
            },
            {
                transform: `translateY(${direction * 10}px)`
            }
        ], {

            duration: 2000,
            fill: "forwards"

        });

    }, 2000);

}


// =============================
// Feature Card Hover Animation
// =============================

const cards = document.querySelectorAll(
    ".feature-card,.trust-box,.gallery-card,.tech-card,.step"
);

cards.forEach(card => {

    card.addEventListener("mouseenter", () => {

        card.style.transform = "translateY(-10px)";

    });

    card.addEventListener("mouseleave", () => {

        card.style.transform = "translateY(0px)";

    });

});


// =============================
// Scroll To Top Button
// =============================

const topButton = document.createElement("button");

topButton.innerHTML = "↑";

topButton.id = "topBtn";

document.body.appendChild(topButton);

window.addEventListener("scroll", () => {

    if (window.scrollY > 400) {

        topButton.style.display = "block";

    } else {

        topButton.style.display = "none";

    }

});

topButton.addEventListener("click", () => {

    window.scrollTo({

        top: 0,

        behavior: "smooth"

    });

});


// =============================
// Hero Animation
// =============================

window.addEventListener("load", () => {

    const hero = document.querySelector(".hero");

    hero.animate([

        {
            opacity: 0,
            transform: "translateY(30px)"
        },

        {
            opacity: 1,
            transform: "translateY(0)"
        }

    ], {

        duration: 1200,

        fill: "forwards"

    });

});


// =============================
// Console Message
// =============================

console.log(
    "%cWelcome to PhilanthroLink!",
    "color:#5E35B1;font-size:20px;font-weight:bold;"
);

console.log(
    "%cDeveloped by Prudhvi Prasad Sikharam",
    "color:#1976D2;font-size:14px;"
);