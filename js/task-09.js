function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const body = document.body;
const button = document.querySelector('button.change-color');
const span = document.querySelector('span.color');

button.addEventListener('click', () => {
  const color = getRandomHexColor();

  body.style.background = color;
  span.textContent = color;
});
