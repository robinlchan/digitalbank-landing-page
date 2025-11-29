const hamburger = document.querySelector(".hamburger");
const mobileNav = document.querySelector("#mobileNav");
const mobileMenu = document.querySelector(".mobile-menu");
const bar1 = document.querySelector(".bar1");
const bar2 = document.querySelector(".bar2");
const bar3 = document.querySelector(".bar3");
const bar1Color = document.querySelector(".bar1");
const bar3Color = document.querySelector(".bar3");

let toggle = true;

hamburger.addEventListener("click", () => {
  toggle = !toggle;

  if (toggle) {
    mobileNav.style.display = "none";
    hamburger.style.opacity = 1;
  } else {
    mobileNav.style.display = "flex";
    hamburger.style.opacity = 0.5;
  }

  if (mobileNav) {
    mobileNav.addEventListener("click", () => {
      mobileMenu.classList.toggle("active");
    });
  }

  bar1.classList.toggle("animateBar1");
  bar2.classList.toggle("animateBar2");
  bar3.classList.toggle("animateBar3");
  bar1Color.classList.toggle("changeColor");
  bar3Color.classList.toggle("changeColor");
});
