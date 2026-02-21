/* ===================================== */
/* HERO SLIDESHOW */
/* ===================================== */

const heroBg = document.querySelector(".hero-bg");

if (heroBg) {
  const heroImages = ["bg1.jpg", "bg2.jpg", "bg3.jpg"];
  let heroIndex = 0;

  function slideHero() {
    heroBg.style.backgroundImage = `url(${heroImages[heroIndex]})`;
    heroIndex = (heroIndex + 1) % heroImages.length;
  }

  slideHero();
  setInterval(slideHero, 4000);
}


/* ===================================== */
/* SCROLL REVEAL */
/* ===================================== */

window.addEventListener("scroll", () => {
  document.querySelectorAll(".reveal").forEach(el => {
    const top = el.getBoundingClientRect().top;
    if (top < window.innerHeight - 100) {
      el.style.opacity = 1;
      el.style.transform = "translateY(0)";
    }
  });
});


/* ===================================== */
/* MODAL */
/* ===================================== */

function openModal(imgSrc, name = "", role = "") {
  const modal = document.getElementById("modal");
  const modalImg = document.getElementById("modal-img");
  const caption = document.getElementById("modal-caption");

  modal.style.display = "block";
  modalImg.src = imgSrc;
  caption.innerHTML = `<strong>${name}</strong><br>${role}`;
}

function closeModal() {
  document.getElementById("modal").style.display = "none";
}


/* ===================================== */
/* FILTER GALLERY (FIX BUG EVENT) */
/* ===================================== */

function filterGallery(category) {
  const items = document.querySelectorAll(".gallery-item");
  const buttons = document.querySelectorAll(".filter-btn");

  buttons.forEach(btn => btn.classList.remove("active"));

  // Cari tombol yang sesuai dan beri active
  buttons.forEach(btn => {
    if (btn.textContent.toLowerCase().includes(category) || category === "all") {
      btn.classList.add("active");
    }
  });

  items.forEach(item => {
    if (category === "all") {
      item.style.display = "block";
    } else {
      item.style.display = item.classList.contains(category) ? "block" : "none";
    }
  });
}


/* ===================================== */
/* AUTO SLIDESHOW GALERI */
/* ===================================== */

const slideImages = ["bg1.jpg", "bg2.jpg", "bg3.jpg", "raker.jpg"];
let slideIndex = 0;

function autoSlide() {
  const slideImg = document.getElementById("slide-img");
  if (!slideImg) return;

  slideIndex = (slideIndex + 1) % slideImages.length;
  slideImg.src = slideImages[slideIndex];
}

setInterval(autoSlide, 6000);


/* ===================================== */
/* HAMBURGER MENU (FINAL FIX) */
/* ===================================== */

const menuToggle = document.getElementById("menuToggle");
const navMenu = document.getElementById("navMenu");

if (menuToggle && navMenu) {
  menuToggle.addEventListener("click", () => {
    navMenu.classList.toggle("active");
    menuToggle.classList.toggle("open");
  });

  // Tutup menu saat klik link
  document.querySelectorAll(".nav-menu a").forEach(link => {
    link.addEventListener("click", () => {
      navMenu.classList.remove("active");
      menuToggle.classList.remove("open");
    });
  });
}
