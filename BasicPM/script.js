"use strict";
// ex1
let myNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
for (let i = 0; i < myNumbers.length; i++) {
    for (let j = 1; j <= 10; j++) {
        let result = myNumbers[i] * j;
        let ex1 = document.getElementById("ex1");
        ex1.innerHTML += `${myNumbers[i]} * ${j}= ${result}
        <hr>
        `;
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
let fullName = {
    firstName: "John",
    lastName: "Doe"
};
let fName = document.getElementById("id2");
fName.innerHTML = fullName.firstName + " " + fullName.lastName;
const nameArray = [fullName];
nameArray.forEach(name => {
    for (let i = 0; i < 10; i++) {
        document.write(name.firstName + " ");
    }
});
function printLastName() {
    for (let i = 0; i < 10; i++) {
        document.write(nameArray[0].lastName + " ");
    }
}
setTimeout(printLastName, 5000);
// ex3
let myNames = ["Patrik", "Juliane", "Sahra joy"];
myNames.forEach((v, i) => {
    console.log(i);
});
myNames.forEach((v, i) => {
    console.log(v);
});
myNames.forEach((v, i) => {
    console.log(`${v} ${i}`);
});
