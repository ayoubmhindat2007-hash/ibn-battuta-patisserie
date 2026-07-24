

const menuToggle = document.querySelector(".menu-toggle");
const navLinks = document.querySelector(".nav-links");
const navItems = document.querySelectorAll(".nav-links a");
/* */

menuToggle.addEventListener("click", () => {
    navLinks.classList.toggle("active");
});

/* */

navItems.forEach(item => {
    item.addEventListener("click", () => {
        navLinks.classList.remove("active");
    });
});
const backToTop = document.getElementById("backToTop");
if (backToTop) {

window.addEventListener("scroll", () => {
    if (window.scrollY > 300) {
        backToTop.classList.add("show");
    } else {
        backToTop.classList.remove("show");
    }
});

backToTop.addEventListener("click", () => {
    window.scrollTo({
        top:0,
        behavior: "smooth"
    });
});
}
const reveals = document.querySelectorAll(".reveal");

function revealElements() {
    reveals.forEach((element) => {
        const windowHeight = window.innerHeight;
        const elementTop = element.getBoundingClientRect().top;
        const revealPoint = 120;

        if (elementTop < windowHeight - revealPoint) {
            element.classList.add("active");
        }
    });
}

window.addEventListener("scroll",
    revealElements
);
window.addEventListener("load",
    revealElements
);

/* Lightbox */

const lightbox = document.getElementById("lightbox");
const lightboxImg = document.getElementById("lightbox-img");
const closeLightbox = document.querySelector(".close-lightbox");
const galleryImages = document.querySelectorAll(".gallery-container img");
let currentImageIndex = 0;
const images = Array.from(galleryImages);

galleryImages.forEach((image, index) => {
    image.addEventListener("click", () => {
        currentImageIndex = index;


        lightbox.classList.add("show");
        lightboxImg.src = image.src;
        lightboxImg.alt = image.alt;
    });
});
closeLightbox.addEventListener("click", () => {
    lightbox.classList.remove("show");
});
lightbox.addEventListener("click", (e) => {
    if (e.target === lightbox) {
        lightbox.classList.remove("show");
    }
});
document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") {
        lightbox.classList.remove("show");
    }
});
document.addEventListener("keydown", (e) => {
    if (!
        lightbox.classList.contains("show") )
        return;
        if (e.key === "ArrowRight") {
            currentImageIndex++;
            if (currentImageIndex >= images.length) {
                currentImageIndex = 0;
            }

            lightboxImg.src = images[currentImageIndex].src;
            lightboxImg.alt = images[currentImageIndex].alt;

        }

        if (e.key === "ArrowLeft") {
            currentImageIndex--;

            if (currentImageIndex < 0) {
                currentImageIndex = images.length - 1;
            }
            lightboxImg.src = images[currentImageIndex].src;
            lightboxImg.alt = images[currentImageIndex].alt;
        }
});

