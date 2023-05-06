const numberInput = document.querySelector(".number-input");

// Generate Grid based on slider Value
const grid = document.querySelector(".grid");
numberInput.addEventListener("input", function (event) {
  const numberInputValue = +event.target.value;
  makeGrid(numberInputValue);
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
