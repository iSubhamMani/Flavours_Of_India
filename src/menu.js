import Food from "./Food";

function createMenu(){
    const menu = document.createElement('div');
    menu.classList.add('menu');

    const menuContainer = document.createElement('div');
    menuContainer.classList.add('menu-container');

    menu.appendChild(menuContainer);

    return menu;
}

function loadFood(food){
    const menuContainer = document.querySelector('.menu-container');

    const foodTitle = document.createElement('div')
    foodTitle.classList.add('food-title');
    foodTitle.textContent = food.name;

    const foodImg = document.createElement('img');
    foodImg.classList.add('food-img');
    foodImg.classList.add(food.className);

    const foodContainer = document.createElement('div');
    foodContainer.classList.add('food');
    foodContainer.appendChild(foodImg);
    foodContainer.appendChild(foodTitle);

    menuContainer.appendChild(foodContainer);
}

export default function loadMenu(){
    const mainContent = document.querySelector('.main-content');
    mainContent.textContent = '';
    mainContent.appendChild(createMenu());

    loadFood(Food('Rice', 'rice'));
    loadFood(Food('Biriyani', 'biriyani'));
    loadFood(Food('Naan', 'naan'));
    loadFood(Food('Butter Paneer', 'butter-paneer'));
    loadFood(Food('Samosa', 'samosa'));
    loadFood(Food('Dosa', 'dosa'));
    loadFood(Food('Idly', 'idly'));
    loadFood(Food('Tandoor Chicken', 'tandoor-chicken'));
    loadFood(Food('Gulab Jamun', 'gulab-jamun'));
}