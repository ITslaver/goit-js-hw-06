const refs = {
  input: document.querySelector("#name-input"),
  span: document.querySelector("#name-output"),
};

refs.input.addEventListener("input", onInputChange);

function onInputChange(event) {
  event.currentTarget.value.trim() !== ""
    ? (refs.span.textContent = event.currentTarget.value.trim())
    : (refs.span.textContent = "Anonymous");
}
