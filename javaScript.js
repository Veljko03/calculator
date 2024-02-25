const display= document.getElementById("display");

const numbers = document.querySelectorAll(".number");
const clearAll = document.getElementById("clear-all");
const ops = document.querySelectorAll(".operator");

const readInput = document.getElementById("in");

let firstNumber=0;
let secondNumber =0;
let operator="*";


console.log(operator)





function add(a,b){
    return a+b;
}

function subtract(a,b){
    return a-b;
}

function devide(a,b){
    return a/b;
}

function multiply(a,b){
    return a*b;
}

function operate(userOperator,num1,num2){
    if(userOperator == "+"){
        return add(num1,num2);
        
    } 
    else if(userOperator == "-"){
        return subtract(num1,num2);
    } 
    else if(userOperator == "/"){
        return devide(num1,num2);
    } 
    else if(userOperator == "*"){
        return multiply(num1,num2);
    }
}


function displayOperators(){
    ops.forEach(element =>{
        element.addEventListener("click", () =>{
            let show = document.createElement("p");
            show.textContent = element.innerHTML;
            display.appendChild(show);
        })
    })
}



function displayNumbers(){
    numbers.forEach(number => {
        number.addEventListener("click", ()=>{
            let show = document.createElement("p");
            show.textContent = number.value;
            dislay.appendChild(show);
        })
    });
}

clearAll.addEventListener("click", ()=>{
    window.location.reload();
})




displayNumbers();
displayOperators();

let sum = operate("+",10,5);
console.log(sum);