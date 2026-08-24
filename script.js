// console.log("Hello world, let's get to work")


function addition (numberA, numberB) {
    let sum = numberA + numberB;
    return sum;
}


function subtraction (numberA, numberB) {
    let sum = numberA - numberB;
    return sum;
}

function multiplication (numberA, numberB) {
    let sum = numberA * numberB;
    return sum;
}

function division (numberA, numberB) {
    let sum = numberA / numberB;
    return sum
}

let valueA = [];
let valueB = 0;
let operator = ["*", "+", "-", "/"]


function operate (valueA, valueB) {

     if (operator[0] == "*"){

        return multiplication(valueA, valueB)

     }

}




// Below is the code for the buttons 

const displayScreen = document.querySelector(".display")


const one = document.querySelector("#one");
const two = document.querySelector("#two");
const three = document.querySelector("#three");
const four = document.querySelector("#four");
const five = document.querySelector("#five");
const six = document.querySelector("#six");
const seven = document.querySelector("#seven");
const eight = document.querySelector("#eight");
const nine = document.querySelector("#nine");
const zero = document.querySelector("#zero");



one.addEventListener("click", () => {
    valueA += 1;
    console.log(valueA);
    displayScreen.textContent = valueA
});

two.addEventListener("click", () => {
    valueA += 2;
    console.log(valueA);
    displayScreen.textContent = valueA
});

three.addEventListener("click", () => {
    valueA += 3;
    console.log(valueA);
    console.log(typeof(valueA));
    displayScreen.textContent = valueA;
    
});

four.addEventListener("click", () => {
    valueA += 4;
    console.log(valueA);
    displayScreen.textContent = valueA
});

five.addEventListener("click", () => {
    valueA += 5;
    console.log(valueA);
    displayScreen.textContent = valueA
});

six.addEventListener("click", () => {
    valueA += 6;
    console.log(valueA);
    displayScreen.textContent = valueA
});

seven.addEventListener("click", () => {
    valueA += 7;
    console.log(valueA);
    displayScreen.textContent = valueA
});

eight.addEventListener("click", () => {
    valueA += 8;
    console.log(valueA);
    displayScreen.textContent = valueA
});

nine.addEventListener("click", () => {
    valueA += 9;
    console.log(valueA);
    displayScreen.textContent = valueA
});

zero.addEventListener("click", () => {
    valueA += 0;
    console.log(valueA);
    displayScreen.textContent = valueA
});




