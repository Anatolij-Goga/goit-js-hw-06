const input = document.querySelector('#validation-input');

input.addEventListener('blur', onBlur);
function onBlur(event) {
  const newInput = event.currentTarget;
  const inputLength = Number(newInput.dataset.length);
  if (newInput.value.length === inputLength) {
    newInput.classList.remove('invalid');
    newInput.classList.add('valid');
  } else {
    newInput.classList.remove('valid');
    newInput.classList.add('invalid');
  }
  console.log(newInput);
  console.log(inputLength);
}
