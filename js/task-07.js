const input = document.querySelector('input#font-size-control');
const text = document.querySelector('span#text');

let inputValue = input.value; // сделала это чтобы шрифт не скакал
text.style.fontSize = `${inputValue}px`;


function onInputChangeFontSize(event) {
  inputValue = event.target.value;
  text.style.fontSize = `${inputValue}px`;
}

input.addEventListener('input', onInputChangeFontSize);