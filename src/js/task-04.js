let counterValue = 0;
const decrementBtn = document.querySelector('button[data-action="decrement"]');
const incrementBtn = document.querySelector('button[data-action="increment"]');
const finalValue = document.querySelector("#value");
decrementBtn.addEventListener("click", () => {
  counterValue -= 1;
  finalValue.textContent = counterValue;
});
incrementBtn.addEventListener("click", () => {
  counterValue += 1;
  finalValue.textContent = counterValue;
});
