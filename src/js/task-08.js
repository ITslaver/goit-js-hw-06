const form = document.querySelector(".login-form");
form.addEventListener("submit", onFormSubmit);

const formData = {};

function onFormSubmit(event) {
  event.preventDefault();
  const formElements = event.currentTarget.elements;
  const email = formElements.email.value;
  const password = formElements.password.value;
  if (email !== "" && password !== "") {
    formData.email = email;
    formData.password = password;
    event.currentTarget.reset();
    return console.log(formData);
  }
  alert("Все поля должны быть заполнены!");
}
