function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
// console.log(getRandomHexColor());

const body = document.querySelector('body');
const changeColorBtn = document.querySelector('button.change-color');
const color = document.querySelector('span.color');


const onButtonChangeColor = (event) => {
  body.style.backgroundColor = getRandomHexColor();
  color.textContent = getRandomHexColor();
}


changeColorBtn.addEventListener('click', onButtonChangeColor);