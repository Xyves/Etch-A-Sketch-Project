const color = document.getElementById("color-picker");
const divBox = document.getElementsByClassName("divs");
const btn = document.getElementById("color-select");
const container = document.getElementById("container");
let selectedColor = "";
// Change the color by clicking a button
btn.addEventListener("click", () => {
  selectedColor = color.value;
});
//Slider
const slider = document.getElementById("myRange");
const sizeElement = document.querySelector(".size");
sizeElement.textContent = slider.value;
slider.addEventListener("input", function () {
  sizeElement.textContent = this.value;
  gridSize = parseInt(this.value); // Update gridSize value
  generateDivs();
  for (let i = 0; i < divBox.length; i++) {
    divBox[i].addEventListener("mouseover", function () {
      this.style.backgroundColor = selectedColor;
    });
  }
});
// Generate Divs
let gridSize = 16;
function generateDivs() {
  const gridSize = slider.value;
  container.style.gridTemplateColumns = `repeat(${gridSize}, 1fr)`;
  container.style.gridTemplateRows = `repeat(${gridSize}, 1fr)`;
  container.innerHTML = "";
  for (let i = 0; i < gridSize * gridSize; i++) {
    const div = document.createElement("div");
    div.classList.add("divs");
    container.appendChild(div);
  }
}
// Eraser
const eraser = document.querySelector(".eraser");
eraser.addEventListener("click", () => {
  for (let i = 0; i < divBox.length; i++) {
    let backgroundWhite = "white";
    divBox[i].style.backgroundColor = backgroundWhite;
  }
});
// Execute generating divs on start
generateDivs();
