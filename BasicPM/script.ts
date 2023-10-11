// ex1

let myNumbers: number[] = [1,2,3,4,5,6,7,8,9,10];
for (let i = 0; i < myNumbers.length; i++) {
    for (let j = 1; j <= 10; j++) {
        let result = myNumbers[i] * j;
        let ex1 = document.getElementById("ex1") as HTMLElement;
        ex1.innerHTML  += `${myNumbers[i]} * ${j}= ${result}
        <hr>
        `
    }
}