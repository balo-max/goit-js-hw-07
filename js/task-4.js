const formElement = document.querySelector('.login-form');

formElement.addEventListener('submit', event => {
    event.preventDefault();

    if (formElement.elements.email.value.trim() === '' || formElement.elements.password.value.trim() === '') {
        return alert('All form fields must be filled in');
    }

    const loginObj = {
        [formElement.elements.email.name]: formElement.elements.email.value.trim(),
        [formElement.elements.password.name]: formElement.elements.password.value.trim(),
    }
    console.log(loginObj);

    formElement.reset();
})
