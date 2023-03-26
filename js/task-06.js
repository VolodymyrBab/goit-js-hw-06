const input = document.querySelector('#validation-input');
// console.log(input);

const validValue = Number(input.getAttribute('data-length'));
// console.log(validValue);


function onInputChange(event) {
  if (event.currentTarget.value.length === validValue) {
    input.classList.add('valid');
    input.classList.remove('invalid');
  } else {
    input.classList.add('invalid');
    input.classList.remove('valid');
}
};

input.addEventListener('blur', onInputChange);