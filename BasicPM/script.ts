// ex1

/*let myNumbers: number[] = [1,2,3,4,5,6,7,8,9,10];
for (let i = 0; i < myNumbers.length; i++) {
    for (let j = 1; j <= 10; j++) {
        let result = myNumbers[i] * j;
        let ex1 = document.getElementById("ex1") as HTMLElement;
        ex1.innerHTML  += `${myNumbers[i]} * ${j}= ${result}
        <hr>
        `
    }
}

// ex1
/*let myNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
for (let i = 0; i < myNumbers.length; i++) {
    for (let j = 1; j <= 10; j++) {
        let result = myNumbers[i] * j;
        let ex1 = document.getElementById("ex1");
        ex1.innerHTML += `${myNumbers[i]} * ${j}= ${result}
        <hr>
        `;
    }
}
*/ 
// ex2

/*let fullName = {
    firstName: "John",
    lastName: "Doe"
};

let fName = document.getElementById("id2") as HTMLElement;
fName.innerHTML = fullName.firstName + " " + fullName.lastName;

const nameArray = [fullName];

nameArray.forEach(name => {
    for (let i = 0; i < 10; i++) {
        document.write(name.firstName + " ");
      }
});

function printLastName () {
    for (let i = 0; i < 10; i++) {
        document.write(nameArray[0].lastName + " ");
    }
}

setTimeout(printLastName, 5000);

// ex3
let myNames: string[] = ["Patrik", "Juliane", "Sahra joy"];
myNames.forEach((v,i) => {
    console.log(i);
   
});


myNames.forEach((v,i) => {
    console.log(v);
   
});

myNames.forEach((v,i) => {
    console.log(`${v} ${i}`);
});

*/ 

// Advanced ex 

type MenuItem = {
    name: string;
    description: string;
    price: number;
    img: string;
};

const menu: MenuItem[] = [
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

let restaurantName1 = document.querySelector('h1') as HTMLElement;
restaurantName1.innerText = restaurantName;
document.title = restaurantName;
