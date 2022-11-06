const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const elements = [];

ingredients.forEach(item => {
  const element = document.createElement('li');
  element.textContent = item;
  element.classList.add('item');

  elements.push(element);
});

const ingredientsElement = document.querySelector('ul#ingredients');

ingredientsElement.append(...elements);