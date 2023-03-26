function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
// доступ до елементів
const refs = {
  interface: document.querySelector('#controls'),
  input: document.querySelector('input'),
  btnCreate: document.querySelector('[data-create]'),
  btnDestroy: document.querySelector('[data-destroy]'),
  boxes: document.querySelector('#boxes'),
}


// callback функція для створення розмітки
const createBoxes = (amount) => {
  destroyBoxes();
  const markup = [];
  for (let i = 0; i < amount; i += 1) {
    let size = 30 + i * 10;
    const box = `<div style="background-color: ${getRandomHexColor()}; width: ${size}px; height: ${size}px;">${i+1}</div>`;
    markup.push(box);
  }
  // console.log(markup);
  refs.boxes.insertAdjacentHTML('afterbegin', markup);
}


// функція для очищення
const destroyBoxes = () => {
  refs.boxes.innerHTML = '';
  refs.input.value = '';
}

// функція для івента create
const onButtonCreateClick = (event) => {
  const amount = refs.input.value;
  const markup = createBoxes(amount);
}


refs.btnCreate.addEventListener('click', onButtonCreateClick);
refs.btnDestroy.addEventListener('click', destroyBoxes);