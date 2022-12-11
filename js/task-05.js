const inputElement = document.querySelector('#name-input');
const spanElement = document.querySelector('#name-output');

inputElement.addEventListener('input', newInput);

function newInput(event) {
  spanElement.textContent = event.currentTarget.value;

  if (event.currentTarget.value === '') {
    spanElement.textContent = 'Anonymous';
  }
}
