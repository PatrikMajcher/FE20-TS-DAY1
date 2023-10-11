"use strict";
/* Basic ex 1
Make a multiplication table using TypeScript loops from an array with number values 1 to 10*/
function multTab() {
    for (let iA = 1; iA < 11; iA++) {
        let result = document.getElementById("multiplication-table");
        result.innerHTML += `
        <hr>
        `;
        for (let iB = 1; iB < 11; iB++) {
            let result = document.getElementById("multiplication-table");
            let sum = iB * iA;
            result.innerHTML += `
                <p>${iB} X ${iA} = ${sum}</p>
            `;
        }
    }
}
multTab();
/*Basic ex 2
1. Print your full name in the browser (you will have an object that has 2 properties fName and lName).
2. Print your first name 10 times in the browser using a forEach loop (don't forget that forEach loop work on arrays, so you can put the object in an array and repeat it).
3. A function should be triggered 5 seconds after opening the page that prints your last name in the console 10 times.*/
let obj = [{
        fName: "Sahra Joy",
        lName: "Stursa"
    }];
for (let i = 0; i < 10; i++) {
    obj.forEach(name => {
        let result = document.getElementById("fName");
        result.innerHTML += `
            <p>${name.fName}</p>
        `;
    });
}
;
function lName() {
    for (let i = 0; i < 10; i++) {
        obj.forEach(name => {
            console.log(name.lName);
        });
    }
    ;
}
;
setTimeout(lName, 5000);
/*Basic ex 3
Create an array of names, this array should only accept strings.
1. Print only the index of the elements.
2. Print only the values.
3. Print both index and values.*/
let names = ["John", "Jane", "Mark"];
names.forEach((e, i) => {
    console.log(i);
    console.log(e);
    console.log(`${i} ${e}`);
});
