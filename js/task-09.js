function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const bodyElement = document.querySelector('body');

const changeColorElement = document.querySelector('.change-color');

const colorElement = document.querySelector('.color');

changeColorElement.addEventListener('click', () => {
  bodyElement.style.backgroundColor = `${getRandomHexColor()}`;
  colorElement.textContent = bodyElement.style.backgroundColor;
});
