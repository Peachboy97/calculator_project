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
    return sum;
}

let valueA = [];
let valueB = [];
let operator = [];

function operate () {

    let filtered = valueB.reduce((sum, nextNumber) => sum + nextNumber,0);
        if (filtered === 0 && operator[0] === "/") {

            for (b = valueB.length; b == valueB.length; b--) {
                valueB.splice([0],1);
            }

            for (a = valueA.length; a == valueA.length; a--) {
                valueA.splice([0],1)
            }

            console.log(valueB);
            console.log(valueA);
            return displayScreen.textContent = "Can't divide by zero, Try something else"

        } else {
            let stringA = valueA.join("");
            
            let stringB = valueB.join("");

            let numberA = Number(stringA);
            let numberB = Number(stringB);

            if (operator[0] == "*"){

                if (valueA.length >= 0) {
                    for (i = valueA.length; i == valueA.length; i--){
                        valueA.splice(0,1);
                    }
                    valueA.push(multiplication(numberA, numberB));
                    for (j = valueB.length; j == valueB.length; j--){
                        valueB.splice(0,1);
                    }
                }

                return displayScreen.textContent = (multiplication(numberA, numberB))

            } else if (operator[0] == "+") {

                if (valueA.length >= 0) {
                    for (i = valueA.length; i == valueA.length; i--){
                        valueA.splice(0,1);
                    }
                    valueA.push(addition(numberA, numberB));
                    for (j = valueB.length; j == valueB.length; j--){
                        valueB.splice(0,1);
                    };
                };
            
                return displayScreen.textContent = addition(numberA, numberB);

            } else if (operator[0] == "-") {

                if (valueA.length >= 0) {
                    for (i = valueA.length; i == valueA.length; i--){
                        valueA.splice(0,1);
                    }
                    valueA.push(subtraction(numberA, numberB));
                    for (j = valueB.length; j == valueB.length; j--){
                        valueB.splice(0,1);
                    };
                };

                return displayScreen.textContent = subtraction (numberA, numberB);
            } else {
                if (operator[0] == "/") {

                if (valueA.length >= 0) {
                    for (i = valueA.length; i == valueA.length; i--){
                        valueA.splice(0,1);
                    }
                    valueA.push(division(numberA, numberB));

                    for (j = valueB.length; j == valueB.length; j--){
                        valueB.splice(0,1);
                    }
                }
                    
                    return displayScreen.textContent = division(numberA, numberB);
                }
            }
        }
    

}

// Below is the code for the buttons 

const displayScreen = document.querySelector(".display");

const add = document.querySelector("#addition");
const subtract = document.querySelector("#subtract");
const multiply = document.querySelector("#multiply");
const divide = document.querySelector("#divide");
const equals = document.querySelector("#equals");
const clear = document.querySelector("#clear");

clear.addEventListener ("click", () => {
    for (i = valueA.length; i == valueA.length; i--) {
        valueA.splice(0,1);
    
    }

    for (j = valueB.length; j == valueB.length; j--) {
        valueB.splice(0,1)
    }

    operator.splice(0,1);

    displayScreen.textContent = valueA;

    console.log(valueA);
    console.log(valueB);
    console.log(operator);
})


equals.addEventListener ("click", () => {
    operate();

    operator.splice(0,1);

    console.log(valueA);
    console.log(valueB);

});

add.addEventListener ("click", () => {
    operator.push("+");
    console.log(operator);
    if (operator.length == 2 && valueB.length == 0) {

        operator.splice(0,1);

        console.log(operator);

    } else if (operator.length == 2 && valueB.length != 0) {
            operate();
            operator.splice(0,1);
            
            console.log(operator);
    }
    
});

subtract.addEventListener("click", () => {
    operator.push("-");
    console.log(operator);

    if (operator.length ==2 && valueB.length == 0) {

        operator.splice(0,1);
        console.log(operator)
    
    } else if (operator.length == 2 && valueB.length != 0) {

        operate();
        operator.splice(0,1);
        console.log(operator)
    }
});

multiply.addEventListener ("click", () => {
    operator.push("*");

    if (operator.length ==2 && valueB.length == 0) {
    
        operator.splice(0,1);

    } else if (operator.length == 2 && valueB.length != 0) {

        operate();
        operator.splice(0,1);
    }

    console.log(operator)
});

divide.addEventListener ("click", () => {
    operator.push("/");
    if (operator.length == 2 && valueB.length == 0) {
        
        operator.splice(0,1);

    } else if (operator.length == 2 && valueB.length != 0) {
        operate();
        operator.splice(0,1);
    }
    console.log(operator);
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
const backspace = document.querySelector("#delete");
const point = document.querySelector("#point")



one.addEventListener("click", () => {
    if (operator.length === 0) {
        valueA.push(1);
        console.log(valueA);
        displayScreen.textContent = valueA.join("")
    } else {
        valueB.push(1);
        displayScreen.textContent = valueB.join("");
    }
});

two.addEventListener("click", () => {
    
    if (operator.length === 0) {
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
    if (operator.length === 0){
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
    if (operator.length === 0){
        valueA.push(4);
        console.log(valueA);
        displayScreen.textContent = valueA.join("");
    } else {
        valueB.push(4);
        displayScreen.textContent = valueB.join("");
    }
});

five.addEventListener("click", () => {
    if (operator.length === 0) {
        valueA.push(5);
        console.log(valueA);
        displayScreen.textContent = valueA.join("");
    } else {
        valueB.push(5);
        displayScreen.textContent = valueB.join("");
    }
});

six.addEventListener("click", () => {
    if (operator.length === 0) {
        valueA.push(6);
        console.log(valueA);
        displayScreen.textContent = valueA.join("");
    } else {
        valueB.push(6);
        displayScreen.textContent =valueB.join("");

    }
});

seven.addEventListener("click", () => {
    if (operator.length === 0) {
        valueA.push(7);

        console.log(valueA);
        displayScreen.textContent = valueA.join("");
    } else {
        valueB.push(7);
        displayScreen.textContent = valueB.join("");
    }
});

eight.addEventListener("click", () => {
    if (operator.length === 0) {
        valueA.push(8);
        console.log(valueA);
        displayScreen.textContent = valueA.join("");
    } else {
        valueB.push(8);
        displayScreen.textContent = valueB.join("");
    }
});

nine.addEventListener("click", () => {
    if (operator.length === 0) {
        valueA.push(9);
        console.log(valueA);
        displayScreen.textContent = valueA.join("");
    } else {
        valueB.push(9);
        displayScreen.textContent = valueB.join("");
    }
});

zero.addEventListener("click", () => {
    if (operator.length === 0) {
        valueA.push(0);
        console.log(valueA);
        displayScreen.textContent = valueA.join("");
    } else {
        valueB.push(0);
        displayScreen.textContent = valueB.join("");
    }
});

backspace.addEventListener("click", () => {
    if (operator.length === 0) {
        valueA.splice(-1,1);
        
        displayScreen.textContent = valueA.join("")
        
    } else {
        valueB.splice(-1,1);
        displayScreen.textContent = valueB.join("")
    }
})

point.addEventListener ("click", () => {
    if (operator.length === 0) {
        if (!valueA.includes(".")){

            valueA.push(".");
            displayScreen.textContent = valueA.join("");
        }
        
    }  else {
        if (!valueB.includes(".")) {
            valueB.push(".");

            displayScreen.textContent = valueB.join("");
        }
    }
});





