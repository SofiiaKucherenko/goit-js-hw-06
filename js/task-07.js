const input = document.querySelector('input#font-size-control');
const span = document.querySelector('span#text');

input.addEventListener('input', (ev) => {
    const value = ev.target.value;
    
    span.style.fontSize = value + 'px';
})
