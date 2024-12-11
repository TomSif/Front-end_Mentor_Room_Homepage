// Tableau d'objets pour les images
const images = [
  {
    mobile: "./images/tinified/mobile-image-hero-1.jpg",
    desktop: "./images/tinified/desktop-image-hero-1.jpg",
    alt: "Première image du carrousel",
  },
  {
    mobile: "./images/tinified/mobile-image-hero-2.jpg",
    desktop: "./images/tinified/desktop-image-hero-2.jpg",
    alt: "Deuxième image du carrousel",
  },
  {
    mobile: "./images/tinified/mobile-image-hero-3.jpg",
    desktop: "./images/tinified/desktop-image-hero-3.jpg",
    alt: "Troisième image du carrousel",
  },
];

// Tableau d'objets pour les textes
const text = [
  {
    title: "Discover innovative ways to decorate",
    paragraph:
      "We provide unmatched quality, comfort and style for property owners across the country. Our experts combine form and function in bringing your vision to life. Create a room in your own style with our collection and make your property a reflection of you and what you love.",
  },
  {
    title: "We are available all across the globe",
    paragraph:
      "We are available all across the globe With stores all over the world, it's easy for you to find furniture for your home or place of business. Locally, we’re in most major cities throughout the country. Find the branch nearest you using our store locator. Any questions? Don't hesitate to contact us today.",
  },
  {
    title: "Manufactured with the best materials",
    paragraph:
      "Our modern furniture store provide a high level of quality. Our company has invested in advanced technology to ensure that every product is made as perfect and as consistent as possible. With three decades of experience in this industry, we understand what customers want for their home and office.",
  },
];

// Fonction to change  image
let currentIndex = 0;
function updateCarousel(index) {
  const picture = document.querySelector(".carousel__image__picture");
  const img = document.getElementById("carouselImg");
  const sourceMobile = document.getElementById("sourceMobile");
  const sourceDesktop = document.getElementById("sourceDesktop");

  if (!picture) {
    console.error("Balise <picture> introuvable.");
    return;
  }

  if (!img || !sourceMobile || !sourceDesktop) {
    console.error("Éléments <img> ou <source> introuvables dans <picture>.");
    return;
  }

  // Mise à jour des sources
  sourceMobile.srcset = images[index].mobile;
  sourceDesktop.srcset = images[index].desktop;
  img.src = images[index].desktop;
  img.alt = images[index].alt;

  console.log(`Image mise à jour : ${img.alt}`);
}

// Fonction to change text
function updateText(index) {
  const carouselTitle = document.querySelector(".carousel__text__title");
  const carouselParagraph = document.querySelector(
    ".carousel__text__paragraph"
  );

  if (!carouselTitle || !carouselParagraph) {
    console.error("Éléments texte introuvables.");
    return;
  }

  carouselTitle.textContent = text[index].title;
  carouselParagraph.textContent = text[index].paragraph;
}

function logUpdate(index) {
  console.log(`Image mise à jour : ${images[index].alt}`);
  console.log(`Titre mis à jour : ${text[index].title}`);
}

document.addEventListener("DOMContentLoaded", () => {
  const prevBtn = document.getElementById("prevBtn");
  const nextBtn = document.getElementById("nextBtn");

  if (!prevBtn || !nextBtn) {
    console.error("Boutons de navigation introuvables.");
    return;
  }

  prevBtn.addEventListener("click", () => {
    currentIndex = (currentIndex - 1 + images.length) % images.length;
    updateCarousel(currentIndex);
    updateText(currentIndex);
    logUpdate(currentIndex);
  });

  nextBtn.addEventListener("click", () => {
    currentIndex = (currentIndex + 1) % images.length;
    updateCarousel(currentIndex);
    updateText(currentIndex);
    logUpdate(currentIndex);
  });
});

// +-----------------------------------------------------------+
//                          Menu Mobile
// +-----------------------------------------------------------+
const burgerBtn = document.getElementById("burger-btn");
const closeBtn = document.getElementById("close-btn");
const menu = document.getElementById("menu");

// Ouvrir/fermer le menu en cliquant sur le bouton burger
burgerBtn.addEventListener("click", function () {
  menu.classList.remove("hidden");
  setTimeout(() => {
    menu.classList.add("menu--open");
    menu.setAttribute("aria-hidden", "false");
  }, 10);
  console.log("menu open");
});

// Fermer le menu en cliquant sur le bouton de fermeture
closeBtn.addEventListener("click", () => {
  menu.classList.remove("menu--open");
  menu.setAttribute("aria-hidden", "true");
  setTimeout(() => {
    menu.classList.add("hidden");
  }, 600);
});
