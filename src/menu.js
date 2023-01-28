function createMenu() {
    const menu = document.createElement('div');
    menu.classList.add('menu');

    menu.appendChild(createItem('Doner', 'Delicious traditional doner kebab'));
    menu.appendChild(createItem('Souvlaki', 'Traditional Greek fast food'));
    menu.appendChild(createItem('Lyulya', 'Armenian minced meat skewer'));
    menu.appendChild(createItem('Plate', 'Delicious stuff in a plate'));

    return menu;
}

function createItem(name, description) {
    const item = document.createElement('div');
    item.classList.add('menu-item');

    const title = document.createElement('h2');
    title.textContent = name;

    const subtitle = document.createElement('p');
    subtitle.textContent = description;

    const image = document.createElement('img');
    image.src = `./img/${name.toLowerCase()}.jpg`;
    image.alt = name;

    item.appendChild(image);
    item.appendChild(title);
    item.appendChild(subtitle);
    
    return item;
}

function loadMenu() {
    const main = document.getElementById('main');
    main.textContent = '';
    main.appendChild(createMenu());
}

export default loadMenu;