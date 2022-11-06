const buttons = document.querySelectorAll('button');
const input = document.querySelector('input');
const boxes = document.querySelector('div#boxes');
let size = 30;

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

function createBoxes(amount) {
  const elements = [];

  for (let i = 1; i <= amount; i++) {
    const color = getRandomHexColor();

    const element = document.createElement('div');
    element.style.width = size + 'px';
    element.style.height = size + 'px';
    element.style.background = color;
    elements.push(element);

    size += 10;
  }

  boxes.append(...elements);
  input.value = '';
}

function destroyBoxes() {
  for (const item of boxes.querySelectorAll('div')) {
    item.remove();
  }
}

for (const button of buttons) {
  button.addEventListener('click', () => {
    if (button.dataset.create === '') {
      const value = Number(input.value);

      createBoxes(value);
    }
    else if (button.dataset.destroy === '') {
      destroyBoxes();
    }
  })
}
