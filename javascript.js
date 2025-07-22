let num1  = ""
let operator = ""
let num2 = ""
let result = ""


function operate(num1, operator, num2){
    if (operator === "/") {
        return num1 / num2;
    } else if (operator === "*") {
        return num1 * num2;
    } else if (operator === "-") {
        return num1 - num2;
    } else if (operator === "+") {
        return num1 + num2;
    } 
}

function isValidNumber(value) {
   return value !== null && value !== "" && value !== undefined;
}

console.log(isValidNumber(num1))
console.log(isValidNumber(num2))
console.log(isValidNumber(operator))

//button functions
const outcome = document.querySelector(".outcome")

const clear = document.querySelector(".clear")
clear.addEventListener("click", (event) => {
    num1 = "";
    num2 = "";
    operator = "";
    result = "";
    outcome.textContent = ""
    console.log(`The num1 is ${num1}`)
    console.log(`The num2 is ${num2}`)
    console.log(`The result is ${result}`)
    console.log(`The operator is ${operator}`)

})

const decimal = document.querySelector(".decimal")
decimal.addEventListener("click", (event) => {
    if ( outcome.includes(".") === false){
        if (result != ""){
        num1 = result;
        result = ""
        num2 = "";
        num2 += ".";
        outcome.textContent = num2;

        } else if (operator === ""){
            num1 += ".";
            outcome.textContent = num1
        } else if (operator != "" && result === ""){
            num2 += ".";
            outcome.textContent = num2
        }
    } else {
        ;
}          
    console.log(`The num1 is ${num1}`)
    console.log(`The num2 is ${num2}`)
    console.log(`The result is ${result}`)
    console.log(`The operator is ${operator}`)
})

const zero = document.querySelector(".zero")
zero.addEventListener("click", (event) => {
    if (result != ""){
        num1 = result;
        result = ""
        num2 = "";
        num2 += "0";
        outcome.textContent = num2;

        } else if (operator === ""){
            num1 += "0";
            outcome.textContent = num1
        } else if (operator != "" && result === ""){
            num2 += "0";
            outcome.textContent = num2
        }
    console.log(`The num1 is ${num1}`)
    console.log(`The num2 is ${num2}`)
    console.log(`The result is ${result}`)
    console.log(`The operator is ${operator}`)
})

const one = document.querySelector(".one")
one.addEventListener("click", (event) => {
      if (result != ""){
      num1 = result;
      result = ""
      num2 = "";
      num2 += "1";
      outcome.textContent = num2;

    } else if (operator === ""){
        num1 += "1";
        outcome.textContent = num1
    } else if (operator != "" && result === ""){
        num2 += "1";
        outcome.textContent = num2
    }
console.log(`The num1 is ${num1}`)
console.log(`The num2 is ${num2}`)
console.log(`The result is ${result}`)
console.log(`The operator is ${operator}`)
})

const two = document.querySelector(".two")
two.addEventListener("click", (event) => {
     if (result != ""){
      num1 = result;
      result = ""
      num2 = "";
      num2 += "2";
      outcome.textContent = num2;

    } else if (operator === ""){
        num1 += "2";
        outcome.textContent = num1
    } else if (operator != "" && result === ""){
        num2 += "2";
        outcome.textContent = num2
    }
console.log(`The num1 is ${num1}`)
console.log(`The num2 is ${num2}`)
console.log(`The result is ${result}`)
console.log(`The operator is ${operator}`)
})

const three = document.querySelector(".three")
three.addEventListener("click", (event) => {
      if (result != ""){
        num1 = result;
        result = ""
        num2 = "";
        num2 += "3";
        outcome.textContent = num2;

        } else if (operator === ""){
            num1 += "3";
            outcome.textContent = num1
        } else if (operator != "" && result === ""){
            num2 += "3";
            outcome.textContent = num2
        }
    console.log(`The num1 is ${num1}`)
    console.log(`The num2 is ${num2}`)
    console.log(`The result is ${result}`)
    console.log(`The operator is ${operator}`)
})

const four = document.querySelector(".four")
four.addEventListener("click", (event) => {
     if (result != ""){
        num1 = result;
        result = ""
        num2 = "";
        num2 += "4";
        outcome.textContent = num2;

        } else if (operator === ""){
            num1 += "4";
            outcome.textContent = num1
        } else if (operator != "" && result === ""){
            num2 += "4";
            outcome.textContent = num2
        }
    console.log(`The num1 is ${num1}`)
    console.log(`The num2 is ${num2}`)
    console.log(`The result is ${result}`)
    console.log(`The operator is ${operator}`)
})

const five = document.querySelector(".five")
five.addEventListener("click", (event) => {
     if (result != ""){
        num1 = result;
        result = ""
        num2 = "";
        num2 += "5";
        outcome.textContent = num2;

        } else if (operator === ""){
            num1 += "5";
            outcome.textContent = num1
        } else if (operator != "" && result === ""){
            num2 += "5";
            outcome.textContent = num2
        }
    console.log(`The num1 is ${num1}`)
    console.log(`The num2 is ${num2}`)
    console.log(`The result is ${result}`)
    console.log(`The operator is ${operator}`)
})

const six = document.querySelector(".six")
six.addEventListener("click", (event) => {
    if (result != ""){
        num1 = result;
        result = ""
        num2 = "";
        num2 += "6";
        outcome.textContent = num2;

        } else if (operator === ""){
            num1 += "6";
            outcome.textContent = num1
        } else if (operator != "" && result === ""){
            num2 += "6";
            outcome.textContent = num2
        }
    console.log(`The num1 is ${num1}`)
    console.log(`The num2 is ${num2}`)
    console.log(`The result is ${result}`)
    console.log(`The operator is ${operator}`)  
})

const seven = document.querySelector(".seven")
seven.addEventListener("click", (event) => {
    if (result != ""){
        num1 = result;
        result = ""
        num2 = "";
        num2 += "7";
        outcome.textContent = num2;

        } else if (operator === ""){
            num1 += "7";
            outcome.textContent = num1
        } else if (operator != "" && result === ""){
            num2 += "7";
            outcome.textContent = num2
        }
    console.log(`The num1 is ${num1}`)
    console.log(`The num2 is ${num2}`)
    console.log(`The result is ${result}`)
    console.log(`The operator is ${operator}`)
})

const eight = document.querySelector(".eight")
eight.addEventListener("click", (event) => {
     if (result != ""){
        num1 = result;
        result = ""
        num2 = "";
        num2 += "8";
        outcome.textContent = num2;

        } else if (operator === ""){
            num1 += "8";
            outcome.textContent = num1
        } else if (operator != "" && result === ""){
            num2 += "8";
            outcome.textContent = num2
        }
    console.log(`The num1 is ${num1}`)
    console.log(`The num2 is ${num2}`)
    console.log(`The result is ${result}`)
    console.log(`The operator is ${operator}`)
})

const nine = document.querySelector(".nine")
nine.addEventListener("click", (event) => {
     if (result != ""){
        num1 = result;
        result = ""
        num2 = "";
        num2 += "9";
        outcome.textContent = num2;

        } else if (operator === ""){
            num1 += "9";
            outcome.textContent = num1
        } else if (operator != "" && result === ""){
            num2 += "9";
            outcome.textContent = num2
        }
    console.log(`The num1 is ${num1}`)
    console.log(`The num2 is ${num2}`)
    console.log(`The result is ${result}`)
    console.log(`The operator is ${operator}`)
})

const divide = document.querySelector(".divide")
divide.addEventListener("click", (event) => {

    if (operator === ""){
        operator = "/"; 
    } else if (operator != ""){
        if (Number(num2) === 0) {
            window.alert("We can not divide with a zero. \nPlease start over.")
            num1 = "";
            num2 = "";
            operator = "";
            result = "";
        } else {
            num1 = Number(num1)
            num2 = Number(num2)
            result = operate(num1, operator, num2)
            outcome.textContent = result
            operator = "/"
    }}
    console.log(`The num1 is ${num1}`)
    console.log(`The num2 is ${num2}`)
    console.log(`The result is ${result}`)
    console.log(`The operator is ${operator}`)
})

const multiply = document.querySelector(".multiply")
multiply.addEventListener("click", (event) => {
    if (operator === ""){
        operator = "*"; 
    } else if (operator != ""){
        if (Number(num2) === 0 && operator === "/") {
            window.alert("We can not divide with a zero. \nPlease start over.")
            num1 = "";
            num2 = "";
            operator = "";
            result = ""; 
    }   else  {
        num1 = Number(num1)
        num2 = Number(num2)
        result = operate(num1, operator, num2)
        outcome.textContent = result
        operator = "*"
    }
 }
    console.log(`The num1 is ${num1}`)
    console.log(`The num2 is ${num2}`)
    console.log(`The result is ${result}`)
    console.log(`The operator is ${operator}`)
})

const minus = document.querySelector(".minus")
minus.addEventListener("click", (event) => {
    if (operator === ""){
      operator = "-"; 
    } else if (operator != ""){
        if (Number(num2) === 0 && operator === "/") {
            window.alert("We can not divide with a zero. \nPlease start over.")
            num1 = "";
            num2 = "";
            operator = "";
            result = "";
    }   else {
            num1 = Number(num1)
            num2 = Number(num2)
            result = operate(num1, operator, num2)
            outcome.textContent = result
            operator = "-"
    }
}
    console.log(`The num1 is ${num1}`)
    console.log(`The num2 is ${num2}`)
    console.log(`The result is ${result}`)
    console.log(`The operator is ${operator}`)
})

const add = document.querySelector(".add")
add.addEventListener("click", (event) => {
    if (operator === ""){
    operator = "+"; 
    } else if (operator != ""){
        if (Number(num2) === 0 && operator === "/") {
        window.alert("We can not divide with a zero. \nPlease start over.")
        num1 = "";
        num2 = "";
        operator = "";
        result = "";
    }   else {
        num1 = Number(num1)
        num2 = Number(num2)
        result = (operate(num1, operator, num2))
        outcome.textContent = result
        operator = "+"
    }
 }
console.log(`The num1 is ${num1}`)
console.log(`The num2 is ${num2}`)
console.log(`The result is ${result}`)
console.log(`The operator is ${operator}`)
})



const equals = document.querySelector(".equals")
equals.addEventListener("click", (event) => {
        if ( num1 === "" || num2 === "" || operator === "") {
            window.alert("You need to enter two number and an operator. Please start again")
            num1 = "";
            num2 = "";
            operator = "";
            result = "";
            outcome.textContent = "Enter a number"
    // Prevent divide by zero
        } else if ( Number(num2) === 0 && operator === "/") {
            window.alert("We can not divide with a zero. \nPlease start over.")
            num1 = "";
            num2 = "";
            operator = "";
            result = "";
        } else {
            // Safe to calculate
            num1 = Number(num1)
            num2 = Number(num2)
            result = operate(num1, operator, num2)
            outcome.textContent = result
         }
        console.log(`The num1 is ${num1}`)
        console.log(`The num2 is ${num2}`)
        console.log(`The result is ${result}`)
        console.log(`The operator is ${operator}`)
})


/* 

Open issues:
1. Pressing = before entering all of the numbers or an operator could cause problems! 
    UPDATE: problems seems solved. Check again tomorrow
2. divide by zero is also not working at .equals

*/
