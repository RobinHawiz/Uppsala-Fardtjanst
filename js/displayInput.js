let radioAndInputs = document.querySelectorAll(".radio-and-input");

radioAndInputs.forEach((radioAndInput) => {
  // Assuming that the radio buttons are always the first element inside the parent element.
  // We are extracting the labels from the radio buttons and inserting them into an array.
  let radioArray = Array.from(radioAndInput.children[0].children);
  let inputContainer = radioAndInput.children[1];

  // I probably should refactor this monstrosity...
  radioArray.forEach((label) => {
    // A special case for when we don't want to show an input based on a radio/checkbox choice.
    if (!(label.querySelector("#no") === null)) {
      label.addEventListener("click", () => {
        // Hide input
        inputContainer.style.display = "none";
        // Set aria expanded to false for the radio button labeled yes
        document.querySelector("#yes").setAttribute("aria-expanded", false);
        // Prevent the user from unchecking the checkbox.
        document.querySelector("#no").checked = true;
        // Uncheck the yes radio button
        document.querySelector("#yes").checked = false;
      });
    } else if (!(label.querySelector("#yes") === null)) {
      label.addEventListener("click", () => {
        // Show input
        inputContainer.style.display = "flex";
        // Set aria expanded to true for the radio/checkbox labeled yes
        document.querySelector("#yes").setAttribute("aria-expanded", true);
        // Prevent the user from unchecking the checkbox.
        document.querySelector("#yes").checked = true;
        // Uncheck the no checkbox
        document.querySelector("#no").checked = false;
      });
    }
    // Other special cases for when we want to show a different input depending on which radio button is selected.
    else if (!(label.querySelector("#weekly") === null)) {
      label.addEventListener("click", () => {
        // Hide monthly input
        document.querySelector(".input-container.monthly").style.display =
          "none";
        document.querySelector(
          ".input-container.monthly.return-trip"
        ).style.display = "none";
        // Show weekly input
        document.querySelector(".input-container.weekly").style.display =
          "flex";
        document.querySelector(
          ".input-container.weekly.return-trip"
        ).style.display = "flex";
      });
    } else if (!(label.querySelector("#monthly") === null)) {
      label.addEventListener("click", () => {
        // Hide weekly input
        document.querySelector(".input-container.weekly").style.display =
          "none";
        document.querySelector(
          ".input-container.weekly.return-trip"
        ).style.display = "none";
        // Show monthly input
        label.addEventListener("click", () => {
          document.querySelector(".input-container.monthly").style.display =
            "flex";
          document.querySelector(
            ".input-container.monthly.return-trip"
          ).style.display = "flex";
        });
      });
    } else if (!(label.querySelector("#departure") === null)) {
      label.addEventListener("click", () => {
        // Hide arrival input
        document.querySelector(
          ".input-container.arrival-container"
        ).style.display = "none";
        // Show departure input
        document.querySelector(
          ".input-container.departure-container"
        ).style.display = "flex";
        // Set aria expanded to true for departure input
        document
          .querySelector("#departure")
          .setAttribute("aria-expanded", true);
        // Set aria expanded to false for arrival input
        document.querySelector("#arrival").setAttribute("aria-expanded", false);
        // Prevent the user from unchecking the checkbox.
        document.querySelector("#departure").checked = true;
        // Uncheck the arrival checkbox
        document.querySelector("#arrival").checked = false;
      });
    } else if (!(label.querySelector("#arrival") === null)) {
      label.addEventListener("click", () => {
        // Hide departure input
        document.querySelector(
          ".input-container.departure-container"
        ).style.display = "none";
        // Show arrival input
        document.querySelector(
          ".input-container.arrival-container"
        ).style.display = "flex";
        // Set aria expanded to true for arrival input
        document.querySelector("#arrival").setAttribute("aria-expanded", true);
        // Set aria expanded to false for departure input
        document
          .querySelector("#departure")
          .setAttribute("aria-expanded", false);
        // Prevent the user from unchecking the checkbox.
        document.querySelector("#arrival").checked = true;
        // Uncheck the departure checkbox
        document.querySelector("#departure").checked = false;
      });
    } else if (!(label.querySelector("#private-car") === null)) {
      label.addEventListener("click", () => {
        // Hide carpooling paragraph
        document.querySelector(
          ".input-container.carpooling-paragraph"
        ).style.display = "none";
        // Show private car paragraph
        document.querySelector(
          ".input-container.private-car-paragraph"
        ).style.display = "flex";
        // Set aria expanded to true for private car input
        document
          .querySelector("#private-car")
          .setAttribute("aria-expanded", true);
        // Set aria expanded to false for carpooling input
        document
          .querySelector("#carpooling")
          .setAttribute("aria-expanded", false);
        // Prevent the user from unchecking the checkbox.
        document.querySelector("#private-car").checked = true;
        // Uncheck the carpooling checkbox
        document.querySelector("#carpooling").checked = false;
      });
    } else if (!(label.querySelector("#carpooling") === null)) {
      label.addEventListener("click", () => {
        // Hide private car paragraph
        document.querySelector(
          ".input-container.private-car-paragraph"
        ).style.display = "none";
        // Show carpool paragraph
        document.querySelector(
          ".input-container.carpooling-paragraph"
        ).style.display = "flex";
        // Set aria expanded to true for carpooling input
        document
          .querySelector("#carpooling")
          .setAttribute("aria-expanded", true);
        // Set aria expanded to false for private car input
        document
          .querySelector("#private-car")
          .setAttribute("aria-expanded", false);
        // Prevent the user from unchecking the checkbox.
        document.querySelector("#carpooling").checked = true;
        // Uncheck the private car checkbox
        document.querySelector("#private-car").checked = false;
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
