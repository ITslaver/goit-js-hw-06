// function getRandomHexColor() {
//   return `#${Math.floor(Math.random() * 16777215)
//     .toString(16)
//     .padStart(6, 0)}`;
// }

const inputEl = document.querySelector("input");
const boxesDiv = document.querySelector("#boxes");
const btnCreate = document.querySelector("button[data-create]");
const btnDestroy = document.querySelector("button[data-destroy]");
let boxSize = 30;

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

btnCreate.addEventListener("click", createBoxes);
btnDestroy.addEventListener("click", destroyBoxes);

function createBoxes(amount) {
  amount = inputEl.value;
  for (let i = 0; i < amount; i += 1) {
    const box = document.createElement("div");
    box.style.backgroundColor = getRandomHexColor();
    box.style.width = boxSize + i * 10 + "px";
    box.style.height = boxSize + i * 10 + "px";
    box.classList.add("box");
    boxesDiv.before(box);
  }
}

function destroyBoxes() {
  // const newBox = document.querySelector(".box");
  // newBox.remove();
  const newBoxes = document.querySelectorAll(".box");
  for (let i = 0; i < newBoxes.length; i += 1) {
    newBoxes[i].remove();
  }
}
