const valueRef = document.querySelector('#value');


let counterValue = Number(valueRef.textContent);


const onDecrementButton = () => {
  valueRef.textContent = counterValue -=1 ;
}

const onIncrementButton = () => {
  valueRef.textContent = counterValue += 1;
}

const decrement = document.querySelector('[data-action="decrement"]');
decrement.addEventListener('click', onDecrementButton);

const increment = document.querySelector('[data-action="increment"]');
increment.addEventListener('click', onIncrementButton);