let counterValue = 0;

const buttons = document.querySelectorAll('button');
const value = document.querySelector('#value');

for (const button of buttons) {
    button.addEventListener('click', () => {
        if (button.dataset.action === 'decrement') {
            counterValue -= 1;
        }
        else {
            counterValue += 1;
        }

        value.textContent = counterValue;
    })
}
