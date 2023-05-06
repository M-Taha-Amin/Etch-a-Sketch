const numberInput = document.querySelector(".number-input");
const bucketBtn = document.querySelector(".bucket");
const rainbowBtn = document.querySelector(".rainbow");
const eraserBtn = document.querySelector(".eraser");
const clearBtn = document.querySelector(".clear");
const warning = document.querySelector(".warning");
const grid = document.querySelector(".grid");

// Generate Grid based on Input Value
numberInput.addEventListener("input", function (event) {
  const numberInputValue = +event.target.value;
  if (
    isNaN(numberInputValue) ||
    numberInputValue < 1 ||
    numberInputValue > 100
  ) {
    warning.style.display = "flex";
    setTimeout(function () {
      warning.style.display = "none";
    }, 3000);
  } else {
    warning.style.display = "none";
    makeGrid(numberInputValue);
  }
});

// Functions
const makeGrid = function (value) {
  grid.innerHTML = "";
  for (let i = 1; i <= value * value; i++) {
    const block = document.createElement("div");
    block.classList.add("block");
    grid.style.gridTemplateColumns = `Repeat(${value},1fr)`;
    grid.append(block);
  }
};
const colorBlocks = function () {};

bucketBtn.addEventListener("click", function () {
  colorBlocks(black);
});
