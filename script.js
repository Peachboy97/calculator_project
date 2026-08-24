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




function operate () {
    let stringA = valueA.join("");
    
    let stringB = valueB.join("");

    let numberA = Number(stringA);
    let numberB = Number(stringB);


     if (operator[0] == "*"){

        return displayScreen.textContent = (multiplication(numberA, numberB))

     }

}




// Below is the code for the buttons 

const displayScreen = document.querySelector(".display");

const multiply = document.querySelector("#multiply");
const equals = document.querySelector("#equals");


equals.addEventListener ("click", () => {
    operate();
    
})

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
    displayScreen.textContent = valueA.join("")
});

two.addEventListener("click", () => {
    
    if (operator[0] !== "*" && operator[0] !== "+" && operator[0] !== "-" && operator[0] !== "/") {
        valueA.push(2);
        console.log(valueA);
        displayScreen.textContent = valueA.join("");
    } else {
        valueB.push(2);
        console.log(valueB)
        displayScreen.textContent = valueB.join("");
    }
});

three.addEventListener("click", () => {
    if (operator[0] !== "*" && operator[0] !== "+" && operator[0] !== "-" && operator[0] !== "/"){
        valueA.push(3);
        console.log(valueA);
        console.log(typeof(valueA));
        displayScreen.textContent = valueA.join("");
    } else {
        valueB.push(3);
        console.log(valueB);
        displayScreen.textContent = valueB.join("");
        
    }
    
});

four.addEventListener("click", () => {
    if (operator[0] !== "*" && operator[0] !== "+" && operator[0] !== "-" && operator[0] !== "/"){
        valueA.push(4);
        console.log(valueA);
        displayScreen.textContent = valueA.join("");
    } else {
        valueB.push(4);
        displayScreen.textContent = valueB.join("");
    }
});

five.addEventListener("click", () => {
    if (operator[0] !== "*" && operator[0] !== "+" && operator[0] !== "-" && operator[0] !== "/") {
        valueA.push(5);
        console.log(valueA);
        displayScreen.textContent = valueA.join("");
    } else {
        valueB.push(5);
        displayScreen.textContent = valueB.join("");
    }
});

six.addEventListener("click", () => {
    if (operator[0] !== "*" && operator[0] !== "+" && operator[0] !== "-" && operator[0] !== "/") {
        valueA.push(6);
        console.log(valueA);
        displayScreen.textContent = valueA.join("");
    } else {
        valueB.push(6);
        displayScreen.textContent =valueB.join("");

    }
});

seven.addEventListener("click", () => {
    if (operator[0] !== "*" && operator[0] !== "+" && operator[0] !== "-" && operator[0] !== "/") {
        valueA.push(7);
        console.log(valueA);
        displayScreen.textContent = valueA.join("");
    } else {
        valueB.push(7);
        displayScreen.textContent = valueB.join("");
    }
});

eight.addEventListener("click", () => {
    if (operator[0] !== "*" && operator[0] !== "+" && operator[0] !== "-" && operator[0] !== "/") {
        valueA.push(8);
        console.log(valueA);
        displayScreen.textContent = valueA.join("");
    } else {
        valueB.push(8);
        displayScreen.textContent = valueB.join("");
    }
});

nine.addEventListener("click", () => {
    if (operator[0] !== "*" && operator[0] !== "+" && operator[0] !== "-" && operator[0] !== "/") {
        valueA.push(9);
        console.log(valueA);
        displayScreen.textContent = valueA.join("");
    } else {
        valueB.push(9);
        displayScreen.textContent = valueB.join("");
    }
});

zero.addEventListener("click", () => {
    if (operator[0] !== "*" && operator[0] !== "+" && operator[0] !== "-" && operator[0] !== "/") {
        valueA.push(0);
        console.log(valueA);
        displayScreen.textContent = valueA.join("");
    } else {
        valueB.push(0);
        displayScreen.textContent = valueB.join("");
    }
});










