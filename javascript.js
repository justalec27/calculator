let array1 = []
let array2 = [] // Need to include multiple digits 

let num1  = ""
let operator = ""
let num2 = ""


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

console.log(operate(3, "+", 7))


//button functions
const outcome = document.querySelector(".outcome")

const clear = document.querySelector(".clear")
clear.addEventListener("click", (event) => {
    outcome.textContent = ""
    array1 = []
})

const zero = document.querySelector(".zero")
zero.addEventListener("click", (event) => {
    outcome.textContent = 0
    array1.push(0)
    console.log(array1)
})

const one = document.querySelector(".one")
one.addEventListener("click", (event) => {
    outcome.textContent = 1
    array1.push(1)
    console.log(array1)
})

const two = document.querySelector(".two")
two.addEventListener("click", (event) => {
    outcome.textContent = 2
    array1.push(2)
    console.log(array1)
})

const three = document.querySelector(".three")
three.addEventListener("click", (event) => {
    outcome.textContent = 3 
    array1.push(3) 
    console.log(array1)
})

const four = document.querySelector(".four")
four.addEventListener("click", (event) => {
    outcome.textContent = 4
    array1.push(4)
    console.log(array1)
})

const five = document.querySelector(".five")
five.addEventListener("click", (event) => {
    outcome.textContent = 5
    array1.push(5)
    console.log(array1)
})

const six = document.querySelector(".six")
six.addEventListener("click", (event) => {
    outcome.textContent = 6
    array1.push(6)
    console.log(array1)
})

const seven = document.querySelector(".seven")
seven.addEventListener("click", (event) => {
    outcome.textContent = 7
    array1.push(7)
    console.log(array1)
})

const eight = document.querySelector(".eight")
eight.addEventListener("click", (event) => {
    outcome.textContent = 8
    array1.push(8)
    console.log(array1)
})

const nine = document.querySelector(".nine")
nine.addEventListener("click", (event) => {
    outcome.textContent = 9
    array1.push(9)
    console.log(array1)
})

const divide = document.querySelector(".divide")
divide.addEventListener("click", (event) => {
    array1.push("/")
    console.log(array1)
})

const multiply = document.querySelector(".multiply")
multiply.addEventListener("click", (event) => {
    array1.push("*")
    console.log(array1)
})

const minus = document.querySelector(".minus")
minus.addEventListener("click", (event) => {
    array1.push("-")
    console.log(array1)
})

const add = document.querySelector(".add")
add.addEventListener("click", (event) => {
    array1.push("+")
    console.log(array1)
})


const equals = document.querySelector(".equals")
equals.addEventListener("click", (event) => {

    num1  = Number(array1[0]);
    operator = array1[1];
    num2 = Number(array1[2]);
    let result = operate(num1, operator, num2)
    outcome.textContent = result
})

console.log(array1)


/* 
Note voor volgende keer:
1. Zorg dat de rekenmachine meerdere getallen kan optellen voor num1 en num2, waarschijlijk
heb ik daarvoor 2 arrays nodig. 

2. Ga verder vanaf punt 7. De rest werkt. 




*/