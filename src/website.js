import loadHome from "./home";
import loadCotact from "./contact";
import loadMenu from "./menu";

function createHeader() {
    const header = document.createElement('header');
    header.classList.add('header');

    const restaurantName = document.createElement('h1');
    restaurantName.classList.add('restaurant-name');
    restaurantName.textContent = 'KebabKebab';
    

    header.appendChild(restaurantName);
    header.appendChild(createNav());

    return header;
}

function createNav() {
    const nav = document.createElement('nav');

    const homeBtn = document.createElement('button');
    homeBtn.classList.add('nav-button');
    homeBtn.textContent = 'Home';
    homeBtn.addEventListener('click', (e) => {
        if (e.target.classList.contains('active')) return;
        setActiveBtn(homeBtn);
        loadHome();
    });

    const menuBtn = document.createElement('button');
    menuBtn.classList.add('nav-button');
    menuBtn.textContent = 'Menu';
    menuBtn.addEventListener('click', (e) => {
        if (e.target.classList.contains('active')) return;
        setActiveBtn(menuBtn);
        loadMenu();
    });
    

    const contactBtn = document.createElement('button');
    contactBtn.textContent = 'Contact';
    contactBtn.classList.add('nav-button');
    contactBtn.addEventListener('click', (e) => {
        if (e.target.classList.contains('active')) return;
        setActiveBtn(contactBtn);
        loadCotact();
    });



    nav.appendChild(homeBtn);
    nav.appendChild(menuBtn);
    nav.appendChild(contactBtn);

    return nav;

}

function setActiveBtn(button) {
    const buttons = document.querySelectorAll('.nav-button');


    buttons.forEach(button => {
        if (button != this) {
            button.classList.remove('active');
        }
    });
    button.classList.add('active');
}

function createMain() {
    const main = document.createElement('main');
    main.classList.add('main');
    main.setAttribute('id', 'main');

    return main;
}

function createFooter() {
    const footer = document.createElement('footer');
    footer.classList.add('footer');

    const copyright = document.createElement('p');
    copyright.textContent = `Copyright Ⓒ ${new Date().getFullYear()}`;

    footer.appendChild(copyright);

    return footer;

}

function initializeWebsite() {
    const content = document.getElementById('content');

    content.appendChild(createHeader());
    content.appendChild(createMain());
    content.appendChild(createFooter());

    loadHome();
}

export default initializeWebsite();