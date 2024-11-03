const container = document.getElementById('container');
const registerBtn = document.getElementById('register');
const loginBtn = document.getElementById('login');

registerBtn.addEventListener('click', () => {
    container.classList.add("active");
});

loginBtn.addEventListener('click', () => {
    container.classList.remove("active");
});

document.querySelector('.sign-in button').addEventListener('click', function (event) {
    event.preventDefault(); // Prevent the form from submitting the default way
    window.location.href = 'main.html'; // Redirect to index.html
});