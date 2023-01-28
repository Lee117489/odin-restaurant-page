function createContact() {
    const contact = document.createElement('div');
    contact.classList.add('contact');

    const map = document.createElement('img');
    map.src = './img/map.png';

    const address = document.createElement('p');
    address.textContent = `Visit us at: 321 Food Rd, Istanbul`;


    const telephone = document.createElement('p');
    telephone.textContent = `Call us: 00-321-371110`;

    contact.appendChild(address);
    contact.appendChild(telephone); 
    contact.appendChild(map);

    return contact;
}

function loadContact() {
    const main = document.getElementById('main');
    main.textContent = '';
    main.appendChild(createContact());

    
}

export default loadContact;