let slides = {};
let itemNum = 1;

function init() {
  // Get slide count and button elements
  slides.slides = document.querySelectorAll("section");
  slides.count = slides.slides.length; // Ensure there are 6 sections
  slides.current = 0;
  slides.lBtn = document.querySelector("#left-btn");
  slides.rBtn = document.querySelector("#right-btn");

  // Handle clicks on left and right icons
  slides.lBtn.addEventListener("click", prevSlide);
  slides.rBtn.addEventListener("click", nextSlide);

  // Hide left button and display first slide
  slides.lBtn.style.visibility = "hidden";
  setSlideNum();
  slides.slides[slides.current].style.display = "block";
}

function nextSlide() {
  let lastSlide = slides.current;
  if (slides.current < slides.count - 1) {
    slides.current++;
    slides.lBtn.style.visibility = "visible";
    if (slides.current === slides.count - 1) {
      slides.rBtn.style.visibility = "hidden";
    }
    setSlideNum();
    slides.slides[lastSlide].style.display = "none";
    slides.slides[slides.current].style.display = "block";

    // Add animation here (using GSAP, Anime.js, or CSS)
    // slides[lastSlide].classList.add('slide-out');  // Example using CSS class
    // slides[currentSlide].classList.add('slide-in');  // Example using CSS class
  }
}

function prevSlide() {
  let lastSlide = slides.current;
  if (slides.current > 0) {
    slides.current--;
    slides.rBtn.style.visibility = "visible";
    if (slides.current === 0) {
      slides.lBtn.style.visibility = "hidden";
    }
    setSlideNum();
    slides.slides[lastSlide].style.display = "none";
    slides.slides[slides.current].style.display = "block";

    // Add animation here (using GSAP, Anime.js, or CSS)
  }
}

function setSlideNum() {
  const slideNoDisplay = document.getElementById("counter");
  slideNoDisplay.innerText = `${slides.current + 1} of ${slides.count}`;
}

function nextItem() {
  let listItemId = "noplan" + itemNum;
  let listItem = document.getElementById(listItemId);
  if (listItem) {
    listItem.style.visibility = "visible";
  }
  itemNum++;
}

// Add keyboard navigation
document.addEventListener("keydown", function (e) {
  if (e.keyCode === 39 || e.keyCode === 32) { // right-arrow or space bar pressed
    nextSlide();
  } else if (e.keyCode === 37) { // left-arrow key pressed
    prevSlide();
  } else if (e.keyCode === 82) { // "r" key pressed
    nextItem();
  }
});

window.onload = init;