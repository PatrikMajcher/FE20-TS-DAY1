"use strict";
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
