// HERO SLIDESHOW dengan foto sendiri
const heroBg = document.querySelector(".hero-bg");
const images = [
  "bg1.jpg",
  "bg2.jpg",
  "bg3.jpg"
];

let i = 0;
function slideHero(){
  heroBg.style.backgroundImage = `url(${images[i]})`;
  i = (i + 1) % images.length;
}
setInterval(slideHero, 4000); // ganti tiap 4 detik
slideHero(); // jalankan langsung saat load

// SCROLL ANIMATION
window.addEventListener("scroll",()=>{
document.querySelectorAll(".reveal").forEach(el=>{
let top = el.getBoundingClientRect().top;
if(top < window.innerHeight - 100){
el.style.opacity = 1;
el.style.transform = "translateY(0)";
}
});
});
function openModal(imgSrc, name, role) {
  const modal = document.getElementById('modal');
  const modalImg = document.getElementById('modal-img');
  const caption = document.getElementById('modal-caption');

  modal.style.display = "block";
  modalImg.src = imgSrc;
  caption.innerHTML = `<strong>${name}</strong><br>${role}`;
}

function closeModal() {
  document.getElementById('modal').style.display = "none";
}



/* ================= FILTER ================= */

function filterGallery(category) {
  const items = document.querySelectorAll(".gallery-item");
  const buttons = document.querySelectorAll(".filter-btn");

  buttons.forEach(btn => btn.classList.remove("active"));
  event.target.classList.add("active");

  items.forEach(item => {
    if (category === "all") {
      item.style.display = "block";
    } else {
      item.style.display = item.classList.contains(category) ? "block" : "none";
    }
  });
}

/* ================= AUTO SLIDESHOW ================= */

const slideImages = [
  "bg1.jpg",
  "bg2.jpg",
  "bg3.jpg",
  "raker.jpg"
];

let slideIndex = 0;

function autoSlide() {
  slideIndex++;
  if (slideIndex >= slideImages.length) {
    slideIndex = 0;
  }
  document.getElementById("slide-img").src = slideImages[slideIndex];
}

setInterval(autoSlide, 6000); // ganti gambar tiap 3 detik




function toggleMenu() {
  document.getElementById("navMenu").classList.toggle("active");
}