let accordions = document.querySelectorAll("button[aria-expanded]");

accordions.forEach((accordion) => {
  accordion.addEventListener("click", () => {
    let ariaControls = accordion.getAttribute("aria-controls");
    let content = document.getElementById(ariaControls);
    content.classList.toggle("hidden");

    // Toogles the aria-expanded attribute every time the user opens/closes the accordion.
    let isOpen = accordion.getAttribute("aria-expanded") === "true";
    accordion.setAttribute("aria-expanded", !isOpen);
  });
});
