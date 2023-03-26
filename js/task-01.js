const categories = document.querySelector('#categories');
// console.dir(categories.children);
console.dir(`Number of categories: ${categories.children.length}`);
const items = [...categories.children];
items.forEach(function (item, index) {
    console.dir(`Category: ${item.firstElementChild.textContent}`);
    console.dir(`Elements: ${item.lastElementChild.childElementCount}`);
});
// console.log(items);