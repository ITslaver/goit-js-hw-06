const input = document.querySelector("#validation-input");

input.addEventListener("blur", onInputChange);
input.addEventListener("focus", removeInputClasses);

function onInputChange(event) {
  event.currentTarget.value.trim().length === Number(input.dataset.length)
    ? input.classList.add("valid")
    : input.classList.add("invalid");
  console.log(event.currentTarget.value.length);
}

function removeInputClasses() {
  input.classList.remove("valid", "invalid");
}
