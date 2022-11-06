const input = document.querySelector('input#validation-input');
const length = Number(input.dataset.length);

input.addEventListener('focus', () => {
    input.classList.remove('valid');
    input.classList.remove('invalid');
})

input.addEventListener('blur', (ev) => {
    const value = ev.target.value;

    console.log(value.length, length)

    if (value.length >= length) {
        input.classList.add('valid');
    }
    else {
        input.classList.add('invalid');
    }
})
