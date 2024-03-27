const loginForm = document.querySelector('#login-form');

loginForm.addEventListener('submit', (event) => {
  event.preventDefault();
  const username = loginForm.username.value;
  const password = loginForm.password.value;
}