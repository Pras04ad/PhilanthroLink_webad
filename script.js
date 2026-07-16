/* ==========================================
   PHILANTHROLINK WEB AD
========================================== */

// ===============================
// Smooth Navigation
// ===============================

document.querySelectorAll('a[href^="#"]').forEach(anchor => {

    anchor.addEventListener("click", function(e){

        e.preventDefault();

        document.querySelector(this.getAttribute("href"))
            .scrollIntoView({

                behavior:"smooth"

            });

    });

});


// ===============================
// Fade In Sections
// ===============================

const observer = new IntersectionObserver(entries=>{

    entries.forEach(entry=>{

        if(entry.isIntersecting){

            entry.target.classList.add("show");

        }

    });

},{
    threshold:0.2
});

document.querySelectorAll("section").forEach(section=>{

    section.classList.add("hidden");

    observer.observe(section);

});


// ===============================
// Active Navigation Highlight
// ===============================

const sections=document.querySelectorAll("section");
const navLinks=document.querySelectorAll("nav ul li a");

window.addEventListener("scroll",()=>{

    let current="";

    sections.forEach(section=>{

        const top=section.offsetTop-120;

        if(pageYOffset>=top){

            current=section.getAttribute("id");

        }

    });

    navLinks.forEach(link=>{

        link.classList.remove("active");

        if(link.getAttribute("href")==="#"+current){

            link.classList.add("active");

        }

    });

});


// ===============================
// Image Lightbox
// ===============================

const images=document.querySelectorAll(".gallery img");

const lightbox=document.createElement("div");

lightbox.id="lightbox";

document.body.appendChild(lightbox);

images.forEach(image=>{

    image.addEventListener("click",()=>{

        lightbox.classList.add("active");

        const img=document.createElement("img");

        img.src=image.src;

        while(lightbox.firstChild){

            lightbox.removeChild(lightbox.firstChild);

        }

        lightbox.appendChild(img);

    });

});

lightbox.addEventListener("click",()=>{

    lightbox.classList.remove("active");

});


// ===============================
// Button Ripple Effect
// ===============================

const buttons=document.querySelectorAll(".btn");

buttons.forEach(button=>{

button.addEventListener("click",function(e){

const x=e.clientX-this.offsetLeft;

const y=e.clientY-this.offsetTop;

const ripple=document.createElement("span");

ripple.style.left=x+"px";

ripple.style.top=y+"px";

ripple.classList.add("ripple");

this.appendChild(ripple);

setTimeout(()=>{

ripple.remove();

},600);

});

});


// ===============================
// Hero Text Animation
// ===============================

window.addEventListener("load",()=>{

const hero=document.querySelector(".hero-content");

hero.style.opacity="0";

hero.style.transform="translateY(40px)";

setTimeout(()=>{

hero.style.transition="1.2s";

hero.style.opacity="1";

hero.style.transform="translateY(0px)";

},300);

});


// ===============================
// Navbar Shadow
// ===============================

window.addEventListener("scroll",()=>{

const nav=document.querySelector("nav");

if(window.scrollY>50){

nav.style.boxShadow="0 5px 20px rgba(0,0,0,.3)";

}else{

nav.style.boxShadow="none";

}

});


// ===============================
// Console Welcome
// ===============================

console.log(
"%cWelcome to PhilanthroLink!",
"color:#673AB7;font-size:22px;font-weight:bold;"
);

console.log(
"%cDeveloped by Prudhvi Prasad Sikharam",
"color:#1976D2;font-size:14px;"
);