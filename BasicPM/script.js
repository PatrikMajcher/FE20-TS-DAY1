"use strict";
// ex1
const menu = [
    {
        name: 'Spaghetti Carbonara',
        description: 'Creamy pasta with bacon and Parmesan cheese.',
        price: 12.99,
        img: 'https://cdn.pixabay.com/photo/2018/07/18/19/12/pasta-3547078_1280.jpg'
    },
    {
        name: 'Grilled Salmon',
        description: 'Freshly grilled salmon with lemon butter sauce.',
        price: 15.99,
        img: 'https://cdn.pixabay.com/photo/2016/06/28/17/32/salmon-1485014_1280.jpg'
    },
    {
        name: 'Tiramisu',
        description: 'Classic Italian dessert with coffee and mascarpone.',
        price: 6.99,
        img: 'https://cdn.pixabay.com/photo/2018/04/18/17/22/dessert-3331009_1280.jpg'
    },
];
const menuContainer = document.getElementById('menu');
if (menuContainer) {
    const menuList = document.createElement('ul');
    menuContainer.appendChild(menuList);
    menu.forEach((item, index) => {
        const listItem = document.createElement('li');
        listItem.innerHTML = `
            <h3>${item.name}</h3>
            <p>${item.description}</p>
            <p>Price: $${item.price.toFixed(2)}</p>
            <img src="${item.img}" alt="${item.name}">
        `;
        menuList.appendChild(listItem);
    });
}
const restaurantName = 'Majcher Restaurant';
let restaurantName1 = document.querySelector('h1');
restaurantName1.innerText = restaurantName;
document.title = restaurantName;
