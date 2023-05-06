// Display for slider value
const slider = document.querySelector(".slider");
const sliderValueDisplay = document.querySelector(".slider-value");

slider.addEventListener("input", function (event) {
  const sliderValue = event.target.value;
  sliderValueDisplay.textContent = `${sliderValue} x ${sliderValue}`;
});
