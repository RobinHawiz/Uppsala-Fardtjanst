let radioAndInputs = document.querySelectorAll(".radio-and-input");

radioAndInputs.forEach((radioAndInput) => {
  // Assuming that the radio buttons are always the first element inside the parent element.
  // We are extracting the labels from the radio buttons and inserting them into an array.
  let radioArray = Array.from(radioAndInput.children[0].children);
  let inputContainer = radioAndInput.children[1];

  radioArray.forEach((label) => {
    // A special case for when we don't want to show an input based on a radio button choice.
    if (!(label.querySelector("#no") === null)) {
      // Hide input
      label.addEventListener("click", () => {
        inputContainer.style.display = "none";
      });
    }
    // Another special case for when we want to show a different input depending on which radio button is selected.
    else if (!(label.querySelector("#weekly") === null)) {
      // Hide monthly input
      label.addEventListener("click", () => {
        document.querySelector(".input-container.monthly").style.display =
          "none";
      });
      // Show weekly input
      label.addEventListener("click", () => {
        document.querySelector(".input-container.weekly").style.display =
          "flex";
      });
    } else if (!(label.querySelector("#monthly") === null)) {
      // Hide weekly input
      label.addEventListener("click", () => {
        document.querySelector(".input-container.weekly").style.display =
          "none";
      });
      // Show monthly input
      label.addEventListener("click", () => {
        document.querySelector(".input-container.monthly").style.display =
          "flex";
      });
    }
    // In all other cases we show an input, regardless of which radio button was chosen.
    else {
      // Show input
      label.addEventListener("click", () => {
        inputContainer.style.display = "flex";
      });
    }
  });
});
