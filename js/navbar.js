// Elements

let main = document.querySelector("main");
let burgerking = document.querySelector(".burgerking");
let menu = document.querySelector(".menu");
let lines = document.querySelectorAll(".line");
let nav = document.querySelector("nav");

// Variables

const primaryColor = "#202e45";
const menuFontColor = "white";

let animationComplete = true;

// Setting initial attributes

// Added the attributes here because I forgot to add it inside the HTML from the beginning. Otherwise I'd have to go through every single html page to add these.
burgerking.setAttribute("aria-expanded", false);
burgerking.setAttribute("aria-controls", "navbar");
nav.setAttribute("id", "navbar");

// Event listeners

new ResizeObserver(setNavbarHeight).observe(main); // Not an event listener per se, but is an instance/object that can be used to work in a similar way (but not really).
burgerking.addEventListener("click", toggleNavbar);

// Functions

function setNavbarHeight() {
  let mainHeight = main.offsetHeight;
  nav.style.height = `${2 + mainHeight}px`;
}

function toggleNavbar() {
  // Make sure the user can't spam-click the navbar until it has finished showing/hiding itself.
  if (!animationComplete) {
    return;
  }
  // If the navbar has finished animating, let the user toggle the navbar.
  animationComplete = false;
  if (!nav.classList.contains("opened")) {
    menu.innerText = "Stäng";
    // Adds styling (display: block;).
    nav.classList.add("display-block");
    // Starts an animation that show the navbar.
    nav.classList.add("showNavbar");
    nav.addEventListener(
      "animationend",
      () => {
        animationComplete = true;
      },
      { once: true }
    );
  } else {
    menu.innerText = "Meny";
    // Removing the showNavbar class plays the hide animation, because the nav element has the property (animate: hideNavbar 0.5s;).
    nav.classList.remove("showNavbar");
    nav.addEventListener(
      "animationend",
      () => {
        nav.classList.remove("display-block");
        animationComplete = true;
      },
      { once: true }
    );
  }
  // Toogles the aria-expanded attribute every time the user opens/closes the navbar.
  let isOpen = burgerking.getAttribute("aria-expanded") === "true";
  burgerking.setAttribute("aria-expanded", !isOpen);
  // Toggles styling for burgerking
  burgerking.classList.toggle("toggle");
  // Toggles the opening and closing of the navbar
  nav.classList.toggle("opened");
  // Toggles styling for burgerking span lines
  lines.forEach((line) => {
    line.classList.toggle("toggle");
  });
}
