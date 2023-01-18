const circles = document.querySelectorAll(".circle");
const progresses = document.querySelectorAll(".progress");
const prev = document.querySelector(".prev");
const next = document.querySelector(".next");

let currentActive = 1;

next.addEventListener("click", () => {
  currentActive++;
  if (currentActive > circles.length) {
    currentActive = circles.length;
  }
  load();
});

prev.addEventListener("click", () => {
  currentActive--;

  if (currentActive < 1) {
    currentActive = 1;
  }
  load();
});

function load() {
  circles.forEach((circle, idx) => {
    if (idx < currentActive) {
      circle.classList.add("active");
    } else {
      circle.classList.remove("active");
    }
  });
  progresses.forEach((progress, idx) => {
    if (idx + 1 < currentActive) {
      progress.classList.add("active");
    } else {
      progress.classList.remove("active");
    }
  });
}
