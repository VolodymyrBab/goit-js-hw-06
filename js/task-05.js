const input = document.querySelector('input#name-input');
// console.log(input);

const nameInput = document.querySelector('span#name-output');
// console.log(nameInput);

function onInputChange(event) {
  if (event.currentTarget.value.trim() !== '') {
    nameInput.textContent = event.currentTarget.value;
  } else {
    nameInput.textContent = "Anonymous";
  }
}

input.addEventListener('input', onInputChange);