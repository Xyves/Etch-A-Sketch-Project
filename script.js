const color = document.getElementById("color-picker");
const divBox = document.getElementsByClassName("divs");
const btn = document.getElementById("color-select");
const container = document.getElementById("container");
let selectedColor = "";

// Check if the mouse is pressed

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
let eraser = document.getElementsByClassName("eraser");
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
// Update CSS Grid properties based on grid size

generateDivs();
eraser.addEventListener(click, function () {
  divs.style.backgroundColor = "white";
});
