import loadHome from "./home";
import loadContact from "./contact";
import loadMenu from "./menu";

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

    homeBtn.addEventListener('click', () => {
        if(homeBtn.classList.contains('active')) return;
        else{
            setActiveBtn(document.querySelectorAll('.nav-btn'), document.querySelector('.home-btn'));
            // load home
            loadHome();
        }
    });

    const menuBtn = document.createElement('button');
    menuBtn.classList.add('nav-btn');
    menuBtn.classList.add('menu-btn');
    menuBtn.textContent = 'Menu';

    menuBtn.addEventListener('click', () => {
        if(menuBtn.classList.contains('active')) return;
        else{
            setActiveBtn(document.querySelectorAll('.nav-btn'), document.querySelector('.menu-btn'));
            // load menu
            loadMenu();
        }
    });

    const contactBtn = document.createElement('button');
    contactBtn.classList.add('nav-btn');
    contactBtn.classList.add('contact-btn');
    contactBtn.textContent = 'Contact';

    contactBtn.addEventListener('click', () => {
        if(contactBtn.classList.contains('active')) return;
        else{
            setActiveBtn(document.querySelectorAll('.nav-btn'), document.querySelector('.contact-btn'));
            // load contact
            loadContact();
        }
    });
    
    nav.appendChild(homeBtn);
    nav.appendChild(menuBtn);
    nav.appendChild(contactBtn);

    return nav;
}

function creatMain(){
    const main = document.createElement('main');
    main.classList.add('main');

    const content = document.createElement('div');
    content.classList.add('main-content');

    main.appendChild(content);
    
    return main;
}

function createFooter(){
    const footer = document.createElement('footer');
    footer.classList.add('footer');

    const copyIcon = document.createElement('i');
    copyIcon.classList.add('fa-regular');
    copyIcon.classList.add('fa-copyright');

    const footerTxt = document.createElement('p');
    footerTxt.textContent = 'Copyright iSubhamMani';
    footerTxt.classList.add('copyright-txt');

    footer.appendChild(copyIcon);
    footer.appendChild(footerTxt);

    return footer;
}

function setActiveBtn(buttons, target){
    buttons.forEach(btn => {
        if(btn === target) btn.classList.toggle('active');
        else {
            if( btn.classList.contains('active')) btn.classList.toggle('active');
        }
    })
}

export default function initialize(){
    const content = document.getElementById('content');
    content.appendChild(createHeader());
    content.appendChild(creatMain());
    content.appendChild(createFooter());
    setActiveBtn(document.querySelectorAll('.nav-btn'), document.querySelector('.home-btn'));
    loadHome();
}