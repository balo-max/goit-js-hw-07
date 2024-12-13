function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}


const btnChangeColor = document.querySelector('.change-color');
const colorId = document.querySelector('.color');

btnChangeColor.addEventListener('click', () => {
  document.body.style.backgroundColor = getRandomHexColor();

  colorId.textContent = document.body.style.backgroundColor;
});