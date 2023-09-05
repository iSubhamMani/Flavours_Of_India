function createContact(){
    const contact = document.createElement('div');
    contact.classList.add('contact');

    const contactContainer = document.createElement('div');
    contactContainer.classList.add('contact-container');

    const heading = document.createElement('span');
    heading.textContent = "Contact Us"
    heading.classList.add('contact-heading');

    const numberContainer = document.createElement('div');
    numberContainer.classList.add('numbers-container');

    const phNum1 = document.createElement('span');
    phNum1.textContent = '987-652-326';
    const phNum2 = document.createElement('span');
    phNum2.textContent = '985-654-324';
    const phNum3 = document.createElement('span');
    phNum3.textContent = '986-756-327';

    numberContainer.appendChild(phNum1);
    numberContainer.appendChild(phNum2);
    numberContainer.appendChild(phNum3);

    const socialLinksContainer = document.createElement('div');
    socialLinksContainer.classList.add('social-container');

    const facebook = document.createElement('i');
    facebook.classList.add('facebook-icon')
    facebook.classList.add('fa-brands');
    facebook.classList.add('fa-facebook');

    const twitter = document.createElement('i');
    twitter.classList.add('twitter-icon');
    twitter.classList.add('fa-brands');
    twitter.classList.add('fa-twitter');

    const instagram = document.createElement('i');
    instagram.classList.add('instagram-icon'); 
    instagram.classList.add('fa-brands'); 
    instagram.classList.add('fa-instagram'); 

    socialLinksContainer.appendChild(facebook);
    socialLinksContainer.appendChild(twitter);
    socialLinksContainer.appendChild(instagram);

    contactContainer.appendChild(heading);
    contactContainer.appendChild(numberContainer);
    contactContainer.appendChild(socialLinksContainer);

    contact.appendChild(contactContainer);

    return contact;
}

export default function loadContact(){
    const mainContent = document.querySelector('.main-content');
    mainContent.textContent = '';
    mainContent.appendChild(createContact());
}