function createHeader(){
    const header = document.createElement('div');
    header.classList.add('header');

    const restaurantName = document.createElement('h1');
    restaurantName.classList.add('restaurant-name');
    restaurantName.textContent = 'Flavours Of India';

    header.appendChild(restaurantName);

    return header;
}

export default function initialize(){
    const content = document.getElementById('content');
    content.appendChild(createHeader());
}