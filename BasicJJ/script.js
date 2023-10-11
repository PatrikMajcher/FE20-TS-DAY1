"use strict";
// ex1
let numArr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
for (let i = 0; i < numArr.length; i++) {
    for (let a = 1; a <= 10; a++) {
        let total = i * numArr[i];
        let result = document.getElementById("numbers");
        result.innerHTML += `
        <p>${a} x ${numArr[i]} = ${total}<p>
        `;
    }
}
// ex2
let fullName = [
    { fName: "Juliane", lName: "Johannsen" }
];
fullName.forEach(name => {
    for (let i = 1; i <= 10; i++) {
        let firstName = document.getElementById("fName");
        firstName.innerHTML += `
        <p>My first name is ${name.fName}.</p>
        `;
    }
});
fullName.forEach(name => {
    for (let i = 1; i <= 10; i++) {
        setTimeout(() => console.log(`My last name is ${name.lName}.`), 5000);
    }
});
// ex3
let nameArr = ["John", "Jane", "Max"];
for (let index in nameArr) {
    console.log(index);
}
for (let value of nameArr) {
    console.log(value);
}
for (let [index, value] of Object.entries(nameArr)) {
    console.log(index, value);
}
