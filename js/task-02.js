const ingredients = ['Potatoes', 'Mushrooms', 'Garlic', 'Tomatos', 'Herbs', 'Condiments'];

const list = document.querySelector('#ingredients');

const li = ingredients.map(ingredient => {
  const liItem = document.createElement('li');
  liItem.classList.add('item');
  liItem.textContent = `${ingredient}`;

  return liItem;
});

list.append(...li);

console.log(li);
