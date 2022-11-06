const categories = document.querySelector('ul#categories');
const categoriesChildren = categories.children;

console.log('Number of categories:', categoriesChildren.length);

for (const item of categoriesChildren) {
    console.log('Category:', item.querySelector('h2').textContent);
    console.log('Elements:', item.querySelectorAll('li').length);
}
