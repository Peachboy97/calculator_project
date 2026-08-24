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
const three = document.querySelector("#three");

one.addEventListener("click", () => {
    valueA += 1;
    console.log(valueA);
    displayScreen.textContent = valueA
})

three.addEventListener("click", () => {
    valueA += 3;
    console.log(valueA);
    console.log(typeof(valueA));
    displayScreen.textContent = valueA;
    
})




