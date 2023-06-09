const color = document.getElementById("color-picker");
const divBox = document.getElementsByClassName("divs");
const btn = document.getElementById("color-select");
for (let i = 0; i < 16; i++) {
  let div = document.createElement("div");
  div.classList.add("divs");
  document.getElementById("container").appendChild(div);
}

btn.addEventListener("click", () => {
  for (let i = 0; i < divBox.length; i++) {
    divBox[i].style.backgroundColor = color.value;
  }
});
