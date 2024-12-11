const listCategories = document.querySelector('#categories');
console.log(`Number of categories: ${listCategories.children.length}`);

const itemCategories = document.querySelectorAll('.item');

const listSummary = itemCategories.forEach(element => {
        console.log(`Category: ${element.childNodes[1].textContent}`);
        console.log(`Elements: ${element.childNodes[3].children.length}`);
    });      
