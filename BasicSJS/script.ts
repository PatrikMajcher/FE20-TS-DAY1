/* Basic ex 1
Make a multiplication table using TypeScript loops from an array with number values 1 to 10*/

function multTab() : void {
    for(let i = 0; i < 11; i++){
        let result = document.getElementById("multiplication-table") as HTMLElement;
        let sum = i + 1;
        result.innerHTML += `
            <p>${i} X 1 = ${sum}</p>
        `;
    }
}
multTab();