const hamburger = document.querySelector(".hamburger");
const bar1 = document.querySelector(".bar1");
const bar2 = document.querySelector(".bar2");
const bar3 = document.querySelector(".bar3");
const mobileNav = document.querySelector("#mobileNav");
const bar1Color = document.querySelector(".bar1");
const bar3Color = document.querySelector(".bar3");

hamburger.addEventListener("click", () => {
    bar1.classList.toggle("animateBar1");
    bar2.classList.toggle("animateBar2");
    bar3.classList.toggle("animateBar3");

    mobileNav.classList.toggle("is-open");
    const isExpanded = hamburger.classList.contains('is-open');
    hamburger.setAttribute('aria-expanded', isExpanded);

    bar1Color.classList.toggle("changeColor");
    bar3Color.classList.toggle("changeColor");
})