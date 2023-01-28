function createHome() {
    const home = document.createElement('div');
    home.classList.add('home');

    const img = document.createElement('img');
    img.src = './img/food.jpg';
    
    home.appendChild(createParagraph(`"Experience the taste of traditional Kebabs"`));
    home.appendChild(createParagraph(`Looking for a delicious and authentic Kebab experience? Look no further than our Kebab place! Our menu offers a wide variety of mouth-watering Kebabs made with only the freshest and finest ingredients. From our classic gyro to our juicy shish kebab, there's something for everyone to enjoy.`));
    home.appendChild(img);
    home.appendChild(createParagraph(`Come and visit us today and taste the difference that authentic Kebab can make!`));
    

    return home;
}

function createParagraph(text) {
    const para = document.createElement('p');
    para.textContent = text;
    
    return para;
}


function loadHome() {
    const main = document.getElementById('main');
    main.textContent = '';
    main.appendChild(createHome());

}


export default loadHome;