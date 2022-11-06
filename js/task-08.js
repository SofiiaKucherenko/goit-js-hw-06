const form = document.querySelector('form.login-form');

form.addEventListener('submit', (ev) => {
    ev.preventDefault();

    const data = {};

    for (const element of ev.target.elements) {
        const name = element.name;

        if (name) {
            const value = element.value;

            if (!value) {
                alert('Всі поля повинні бути заповнені!');
                return;
            }

            data[name] = value;
        }
    }

    console.log(data);

    form.reset();
})
