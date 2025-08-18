// CATEGORY BUTTONS - active state
const categoryButtons = document.querySelectorAll(".cat-btn");
categoryButtons.forEach((btn) => {
  btn.addEventListener("click", () => {
    categoryButtons.forEach((b) => b.classList.remove("active"));
    btn.classList.add("active");
  });
});

// ARROWS - scroll left/right
const scrollContainer = document.getElementById("categoryScroll");
const leftArrow = document.getElementById("leftArrow");
const rightArrow = document.getElementById("rightArrow");

leftArrow.addEventListener("click", () => {
  scrollContainer.scrollLeft -= 150; // scroll left
});

rightArrow.addEventListener("click", () => {
  scrollContainer.scrollLeft += 150; // scroll right
});

const scrollDiv = document.getElementById("catScroll");
document.getElementById("leftArrow").addEventListener("click", ()=>{
  scrollDiv.scrollLeft -= 150;
});
document.getElementById("rightArrow").addEventListener("click", ()=>{
  scrollDiv.scrollLeft += 150;
});
let currentSlide = 0;
const slides = document.querySelectorAll(".hero .slide");
const dotsContainer = document.querySelector(".hero .dots");

// create dots
slides.forEach((_, index) => {
  const dot = document.createElement("span");
  dot.addEventListener("click", () => showSlide(index));
  dotsContainer.appendChild(dot);
});

function showSlide(index) {
  slides[currentSlide].classList.remove("active");
  dotsContainer.children[currentSlide].classList.remove("active");

  currentSlide = index;

  slides[currentSlide].classList.add("active");
  dotsContainer.children[currentSlide].classList.add("active");
}

function autoSlide(){
  let next = currentSlide + 1;
  if(next >= slides.length) next = 0;
  showSlide(next);
}

showSlide(0);
setInterval(autoSlide, 4000);
  

const letters = document.querySelectorAll(".animate-title span");
letters.forEach((span, index)=>{
  span.style.animationDelay = (index * 0.06) + "s";
});

