let radioAndInputs = document.querySelectorAll(".radio-and-input");

radioAndInputs.forEach((radioAndInput) => {
  // Assuming that the radio buttons are always the first element inside the parent element.
  // We are extracting the labels from the radio buttons and inserting them into an array.
  let radioArray = Array.from(radioAndInput.children[0].children);
  let inputContainer = radioAndInput.children[1];

  // I probably should refactor this monstrosity...
  radioArray.forEach((label) => {
    // A special case for when we don't want to show an input based on a radio button choice.
    if (!(label.querySelector("#no") === null)) {
      // Hide input
      label.addEventListener("click", () => {
        inputContainer.style.display = "none";
      });
      // Set aria expanded to false for the radio button labeled yes
      label.addEventListener("click", () => {
        document.querySelector("#yes").setAttribute("aria-expanded", false);
      });
      // Uncheck the yes radio button
      label.addEventListener("click", () => {
        document.querySelector("#yes").checked = false;
      });
    } else if (!(label.querySelector("#yes") === null)) {
      // Show input
      label.addEventListener("click", () => {
        inputContainer.style.display = "flex";
      });

      // Set aria expanded to true for the radio button labeled yes
      label.addEventListener("click", () => {
        document.querySelector("#yes").setAttribute("aria-expanded", true);
      });

      // Uncheck the no radio button
      label.addEventListener("click", () => {
        document.querySelector("#no").checked = false;
      });
    }
    // Other special cases for when we want to show a different input depending on which radio button is selected.
    else if (!(label.querySelector("#weekly") === null)) {
      // Hide monthly input
      label.addEventListener("click", () => {
        document.querySelector(".input-container.monthly").style.display =
          "none";

        document.querySelector(
          ".input-container.monthly.return-trip"
        ).style.display = "none";
      });
      // Show weekly input
      label.addEventListener("click", () => {
        document.querySelector(".input-container.weekly").style.display =
          "flex";

        document.querySelector(
          ".input-container.weekly.return-trip"
        ).style.display = "flex";
      });
    } else if (!(label.querySelector("#monthly") === null)) {
      // Hide weekly input
      label.addEventListener("click", () => {
        document.querySelector(".input-container.weekly").style.display =
          "none";

        document.querySelector(
          ".input-container.weekly.return-trip"
        ).style.display = "none";
      });

      // Show monthly input
      label.addEventListener("click", () => {
        document.querySelector(".input-container.monthly").style.display =
          "flex";

        document.querySelector(
          ".input-container.monthly.return-trip"
        ).style.display = "flex";
      });
    } else if (!(label.querySelector("#departure") === null)) {
      // Hide arrival input
      label.addEventListener("click", () => {
        document.querySelector(
          ".input-container.arrival-container"
        ).style.display = "none";
      });
      // Show departure input
      label.addEventListener("click", () => {
        document.querySelector(
          ".input-container.departure-container"
        ).style.display = "flex";
      });
      // Set aria expanded to true for departure input
      label.addEventListener("click", () => {
        document
          .querySelector("#departure")
          .setAttribute("aria-expanded", true);
      });
      // Set aria expanded to false for arrival input
      label.addEventListener("click", () => {
        document.querySelector("#arrival").setAttribute("aria-expanded", false);
      });

      // Uncheck the arrival radio button
      label.addEventListener("click", () => {
        document.querySelector("#arrival").checked = false;
      });
    } else if (!(label.querySelector("#arrival") === null)) {
      // Hide departure input
      label.addEventListener("click", () => {
        document.querySelector(
          ".input-container.departure-container"
        ).style.display = "none";
      });
      // Show arrival input
      label.addEventListener("click", () => {
        document.querySelector(
          ".input-container.arrival-container"
        ).style.display = "flex";
      });
      // Set aria expanded to true for arrival input
      label.addEventListener("click", () => {
        document.querySelector("#arrival").setAttribute("aria-expanded", true);
      });
      // Set aria expanded to false for departure input
      label.addEventListener("click", () => {
        document
          .querySelector("#departure")
          .setAttribute("aria-expanded", false);
      });

      // Uncheck the departure radio button
      label.addEventListener("click", () => {
        document.querySelector("#departure").checked = false;
      });
    } else if (!(label.querySelector("#private-car") === null)) {
      // Hide carpooling paragraph
      label.addEventListener("click", () => {
        document.querySelector(
          ".input-container.carpooling-paragraph"
        ).style.display = "none";
      });
      // Show private car paragraph
      label.addEventListener("click", () => {
        document.querySelector(
          ".input-container.private-car-paragraph"
        ).style.display = "flex";
      });
      // Set aria expanded to true for private car input
      label.addEventListener("click", () => {
        document
          .querySelector("#private-car")
          .setAttribute("aria-expanded", true);
      });
      // Set aria expanded to false for carpooling input
      label.addEventListener("click", () => {
        document
          .querySelector("#carpooling")
          .setAttribute("aria-expanded", false);
      });
      // Uncheck the carpooling radio button
      label.addEventListener("click", () => {
        document.querySelector("#carpooling").checked = false;
      });
    } else if (!(label.querySelector("#carpooling") === null)) {
      // Hide private car paragraph
      label.addEventListener("click", () => {
        document.querySelector(
          ".input-container.private-car-paragraph"
        ).style.display = "none";
      });
      // Show carpool paragraph
      label.addEventListener("click", () => {
        document.querySelector(
          ".input-container.carpooling-paragraph"
        ).style.display = "flex";
      });
      // Set aria expanded to true for carpooling input
      label.addEventListener("click", () => {
        document
          .querySelector("#carpooling")
          .setAttribute("aria-expanded", true);
      });
      // Set aria expanded to false for private car input
      label.addEventListener("click", () => {
        document
          .querySelector("#private-car")
          .setAttribute("aria-expanded", false);
      });
      // Uncheck the private car radio button
      label.addEventListener("click", () => {
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
