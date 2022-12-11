const elements = {
  input: document.querySelector('#font-size-control'),
  span: document.querySelector('#text'),
};

elements.input.addEventListener('input', onInputChange);

function onInputChange(event) {
  console.log(event.currentTarget.value);
  elements.span.style.fontSize = `${event.currentTarget.value}px`;
}
