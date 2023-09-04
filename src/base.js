function createHeader(){
    const header = document.createElement('div');
    header.classList.add('header');

    const restaurantName = document.createElement('h1');
    restaurantName.classList.add('restaurant-name');
    restaurantName.textContent = 'Flavours Of India';

    header.appendChild(restaurantName);
    header.appendChild(createNav());

    return header;
}

function createNav(){
    const nav = document.createElement('nav');

    nav.classList.add('nav');
    
    const homeBtn = document.createElement('button');
    homeBtn.classList.add('nav-btn');
    homeBtn.classList.add('home-btn');
    homeBtn.textContent = 'Home';

    const menuBtn = document.createElement('button');
    menuBtn.classList.add('nav-btn');
    menuBtn.classList.add('menu-btn');
    menuBtn.textContent = 'Menu';

    const contactBtn = document.createElement('button');
    contactBtn.classList.add('nav-btn');
    contactBtn.classList.add('contact-btn');
    contactBtn.textContent = 'Contact';
    
    nav.appendChild(homeBtn);
    nav.appendChild(menuBtn);
    nav.appendChild(contactBtn);

    return nav;
}

function creatMain(){
    const main = document.createElement('main');
    main.classList.add('main');
    
    return main;
}

export default function initialize(){
    const content = document.getElementById('content');
    content.appendChild(createHeader());
    content.appendChild(creatMain());
}