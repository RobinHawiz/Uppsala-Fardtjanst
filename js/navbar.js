let burgerking = document.querySelector(".burgerking");
let menu = document.querySelector(".menu");
let lines = document.querySelectorAll(".line");
let nav = document.querySelector("nav");

let primaryColor = "#202e45";
let menuFontColor = "white";

let animationComplete = true;

burgerking.addEventListener("click", toggleNavbar);

function toggleNavbar() {
  // Make sure the user can't spam-click the navbar until it has finished showing/hiding itself.
  if (!animationComplete) {
    // Do nothing
  }
  // If the navbar has finished animating, let the user toggle the navbar.
  else {
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
    // Toggles styling for burgerking
    burgerking.classList.toggle("toggle");
    // Toggles the opening and closing of the navbar
    nav.classList.toggle("opened");
    // Toggles styling for burgerking span lines
    lines.forEach((line) => {
      line.classList.toggle("toggle");
    });
  }
}
