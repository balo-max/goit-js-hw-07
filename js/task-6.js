function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const controlsPanel = document.querySelector('#controls');
const input = controlsPanel.children[0];
const btnCreate = controlsPanel.children[1];
const btnDestroy = controlsPanel.children[2];
const collection = document.querySelector('#boxes');


const createBoxes = amount => {
  amount = input.value;

  collection.innerHTML = '';

  let sizeBox = 30;
  let boxes = '';

  if (!amount || amount < 1 || amount > 100) {
    alert('Будь ласка, введіть число від 1 до 100!');
    return;
  }

  for (let i = 0; i < amount; i++) {
       boxes += `<div style="width: ${sizeBox}px; height: ${sizeBox}px; background-color: ${getRandomHexColor()}"></div>`;
    sizeBox += 10;
  }
  collection.insertAdjacentHTML('beforeend', boxes);
}

const destroyBoxes = () => {
  collection.innerHTML = '';
} 

btnCreate.addEventListener('click', createBoxes);
btnDestroy.addEventListener('click', destroyBoxes);