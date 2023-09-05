function createHome(){
    const home = document.createElement('div');
    home.classList.add('home');

    const container = document.createElement('div');
    container.classList.add('home-container');

    const heading = document.createElement('div');
    heading.classList.add('heading');
    heading.textContent = 'Taste the flavours of India!';

    const subHeading = document.createElement('p');
    subHeading.classList.add('sub-heading');
    subHeading.textContent = 'Dive into the vast mouth watering cuisine across the nation';

    const bookBtn = document.createElement('button');
    bookBtn.textContent = 'Book Your Seat';
    bookBtn.classList.add('book-seat-btn');

    container.appendChild(heading);
    container.appendChild(subHeading);
    container.appendChild(bookBtn);

    home.appendChild(container);

    return home;
}

export default function loadHome(){
    const mainContent = document.querySelector('.main-content');
    mainContent.textContent = '';
    mainContent.appendChild(createHome());
}

