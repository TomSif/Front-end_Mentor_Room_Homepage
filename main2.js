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
const texts = [
  {
    title: "Discover innovative ways to decorate",
    paragraph:
      "We provide unmatched quality, comfort, and style for property owners across the country. Our experts combine form and function in bringing your vision to life. Create a room in your own style with our collection and make your property a reflection of you and what you love.",
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

// Initialisation du ruban
function initCarousel() {
  const track = document.querySelector(".carousel__track");

  if (!track) {
    console.error("Élément track introuvable !");
    return;
  }

  // Création dynamique des balises <picture>
  images.forEach((image) => {
    const picture = document.createElement("picture");
    picture.classList.add("carousel__picture");

    const sourceMobile = document.createElement("source");
    sourceMobile.srcset = image.mobile;
    sourceMobile.media = "(max-width: 375px)";

    const sourceDesktop = document.createElement("source");
    sourceDesktop.srcset = image.desktop;
    sourceDesktop.media = "(min-width: 376px)";

    const img = document.createElement("img");
    img.src = image.desktop; // Image par défaut (fallback)
    img.alt = image.alt;
    img.classList.add("carousel__image");

    // Ajout des balises dans <picture>
    picture.appendChild(sourceMobile);
    picture.appendChild(sourceDesktop);
    picture.appendChild(img);

    // Ajout du <picture> dans le track
    track.appendChild(picture);
  });
}
const carouselTextHorizontal = document.querySelector(
  ".carousel__text__horizontal-conainer"
);

// Création dynamique des balises <h1 et p>
texts.forEach((text) => {
  const container = document.createElement("div");
  container.classList.add("carousel__text__vertical-container"); // Le conteneur qui englobe le titre et le paragraphe

  const titles = document.createElement("h1");
  titles.classList.add("carousel__text__title");
  titles.innerText = text.title;

  const paragraphs = document.createElement("p");
  paragraphs.classList.add("carousel__text__paragraph");
  paragraphs.innerText = text.paragraph;

  // Ajouter le titre et le paragraphe dans le conteneur
  container.appendChild(titles);
  container.appendChild(paragraphs);

  // Ajouter le conteneur au parent
  carouselTextHorizontal.appendChild(container);
});

// Gestion du défilement
let currentIndex = 0;

function updateCarousel(index) {
  const track = document.querySelector(".carousel__track");
  const imagesCount = images.length;

  if (!track) {
    console.error("Élément track introuvable !");
    return;
  }

  // Calcul de la position pour le ruban
  const translateValue = -100 * index; // Chaque élément occupe 100% de la largeur
  track.style.transform = `translateX(${translateValue}%)`;
  carouselTextHorizontal.style.transform = `translateX(${translateValue}%)`;
}

// Navigation
document.addEventListener("DOMContentLoaded", () => {
  const prevBtn = document.getElementById("prevBtn");
  const nextBtn = document.getElementById("nextBtn");

  if (!prevBtn || !nextBtn) {
    console.error("Boutons introuvables !");
    return;
  }

  initCarousel();

  prevBtn.addEventListener("click", () => {
    currentIndex = (currentIndex + 1) % images.length;

    updateCarousel(currentIndex);
  });

  nextBtn.addEventListener("click", () => {
    currentIndex = (currentIndex - 1 + images.length) % images.length;

    updateCarousel(currentIndex);
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

//fonction pour surveiller la taille d'écran et ajouter la classe .hidden si celle ci dépasse 751px;
const mediaQuery = window.matchMedia("(min-width: 751px)");
mediaQuery.addEventListener("change", handleResize);

function handleResize(e) {
  if (e.matches) {
    menu.classList.remove("hidden");
    menu.classList.remove("menu--open");
    menu.setAttribute("aria-hidden", "false");
  } else {
    menu.classList.add("hidden");
  }
}

handleResize(mediaQuery);
