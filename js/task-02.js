const ingredients = ['Potatoes', 'Mushrooms', 'Garlic', 'Tomatos', 'Herbs', 'Condiments'];

const ingredientsItemEl = document.createElement('li');
ingredientsItemEl.classList.add('item');
ingredientsItemEl.textContent = `lol`;

const ingredientsEl = document.querySelector('#ingredients');

ingredientsEl.appendChild(ingredientsItemEl);
console.log(ingredientsItemEl);
