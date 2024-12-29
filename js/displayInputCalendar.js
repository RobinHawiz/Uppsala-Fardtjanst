// Radio button functionality for weekly radio buttons monday through sunday.

let inputBoxes = document.querySelectorAll(".input-box.day");
let weekDaysRadioButtons = document
  .querySelector(".input-container.weekly")
  .querySelector(".radio-buttons")
  .querySelectorAll("input");

weekDaysRadioButtons.forEach((radioButton, index) => {
  radioButton.addEventListener("click", () => {
    inputBoxes[index].classList.toggle("show");
  });
});

// Radio button functionality for weekly radio buttons monday through sunday (For the return trip fieldset).

let inputBoxesReturnTrip = document.querySelectorAll(
  ".input-box.day.return-trip"
);
let weekDaysRadioButtonsReturnTrip = document
  .querySelector(".input-container.weekly.return-trip")
  .querySelector(".radio-buttons")
  .querySelectorAll("input");

weekDaysRadioButtonsReturnTrip.forEach((radioButton, index) => {
  radioButton.addEventListener("click", () => {
    inputBoxesReturnTrip[index].classList.toggle("show");
  });
});

// Checkbox functionality for calendar checkboxes.

let calendarInputBoxes = document.querySelectorAll(".input-box.calendar.day");
let calendarCheckboxes = document
  .querySelector(".input-container.monthly")
  .querySelector(".calendar-container")
  .querySelectorAll("input");

calendarCheckboxes.forEach((checkboxes, index) => {
  checkboxes.addEventListener("click", () => {
    calendarInputBoxes[index].classList.toggle("show");
  });
});

// Checkbox functionality for calendar checkboxes (For the return trip fieldset).

let calendarInputBoxesReturnTrip = document
  .querySelector(".input-container.monthly.return-trip")
  .querySelectorAll(".input-box.calendar.day");

let calendarCheckboxesReturnTrip = document
  .querySelector(".input-container.monthly.return-trip")
  .querySelector(".calendar-container")
  .querySelectorAll("input");

calendarCheckboxesReturnTrip.forEach((checkboxes, index) => {
  checkboxes.addEventListener("click", () => {
    calendarInputBoxesReturnTrip[index].classList.toggle("show");
  });
});
