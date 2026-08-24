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
let valueB = [];
let operator = [];




function operate (operator) {
    // Number(valueA);
    // Number(valueB);


     if (operator === "*"){

        return multiplication(valueA, valueB)

     }

}




// Below is the code for the buttons 

const displayScreen = document.querySelector(".display");

const multiply = document.querySelector("#multiply");

multiply.addEventListener ("click", () => {
    operator.push("*");
    if (operator.length >=2) {
        operator.splice(1,1);
    }

    console.log(operator)
})


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
    valueA.push(1);
    console.log(valueA);
    displayScreen.textContent = valueA
});

two.addEventListener("click", () => {
    
    if (operator[0] !== "*" && operator[0] !== "+" && operator[0] !== "-" && operator[0] !== "/") {
        valueA.push(2);
        console.log(valueA);
        displayScreen.textContent = valueA;
    } else {
        valueB.push(2);
        console.log(valueB)
        displayScreen.textContent = valueB;
    }
});

three.addEventListener("click", () => {
    if (operator[0] !== "*" && operator[0] !== "+" && operator[0] !== "-" && operator[0] !== "/"){
        valueA.push(3);
        console.log(valueA);
        console.log(typeof(valueA));
        displayScreen.textContent = valueA;
    } else {
        valueB.push(3);
        console.log(valueB);
        displayScreen.textContent = valueB
        
    }
    
});

four.addEventListener("click", () => {
    if (operator[0] !== "*" && operator[0] !== "+" && operator[0] !== "-" && operator[0] !== "/"){
        valueA.push(4);
        console.log(valueA);
        displayScreen.textContent = valueA
    } else {
        valueB.push(4);
        displayScreen.textContent = valueB
    }
});

five.addEventListener("click", () => {
    if (operator[0] !== "*" && operator[0] !== "+" && operator[0] !== "-" && operator[0] !== "/") {
        valueA.push(5);
        console.log(valueA);
        displayScreen.textContent = valueA
    } else {
        valueB.push(5);
        displayScreen.textContent = valueB
    }
});

six.addEventListener("click", () => {
    if (operator[0] !== "*" && operator[0] !== "+" && operator[0] !== "-" && operator[0] !== "/") {
        valueA.push(6);
        console.log(valueA);
        displayScreen.textContent = valueA
    } else {
        valueB.push(6);
        displayScreen.textContent =valueB
    }
});

seven.addEventListener("click", () => {
    if (operator[0] !== "*" && operator[0] !== "+" && operator[0] !== "-" && operator[0] !== "/") {
        valueA.push(7);
        console.log(valueA);
        displayScreen.textContent = valueA
    } else {
        valueB.push(7);
        displayScreen.textContent = valueB;
    }
});

eight.addEventListener("click", () => {
    if (operator[0] !== "*" && operator[0] !== "+" && operator[0] !== "-" && operator[0] !== "/") {
        valueA.push(8);
        console.log(valueA);
        displayScreen.textContent = valueA
    } else {
        valueB.push(8);
        displayScreen.textContent = valueB
    }
});

nine.addEventListener("click", () => {
    if (operator[0] !== "*" && operator[0] !== "+" && operator[0] !== "-" && operator[0] !== "/") {
        valueA.push(9);
        console.log(valueA);
        displayScreen.textContent = valueA
    } else {
        valueB.push(9);
        displayScreen.textContent = valueB
    }
});

zero.addEventListener("click", () => {
    if (operator[0] !== "*" && operator[0] !== "+" && operator[0] !== "-" && operator[0] !== "/") {
        valueA.push(0);
        console.log(valueA);
        displayScreen.textContent = valueA
    } else {
        valueB.push(0);
        displayScreen.textContent = valueB
    }
});










