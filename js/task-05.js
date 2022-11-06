const input = document.querySelector('input#name-input');
const span = document.querySelector('span#name-output');

input.addEventListener('input', (ev) => {
    const value = ev.target.value;

    if (!value) {
        span.textContent = "Anonymous";
        return;
    }

    span.textContent = value;
})
