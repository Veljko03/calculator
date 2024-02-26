const display= document.getElementById("display");

const numbers = document.querySelectorAll(".number");
const clearAll = document.getElementById("clear-all");
const ops = document.querySelectorAll(".operator");
const btnEqual = document.getElementById("eq");
const readInput = document.getElementById("in");

let firstNumber=5;
let secondNumber =7;
let operator="+";








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

btnEqual.addEventListener("click",() =>{
    while(display.firstChild){
        display.firstChild.remove();
    }
    let result = document.createElement("p");
    result.textContent = operate(operator,firstNumber,secondNumber);
    display.appendChild(result);
})

function displayOperators(){
    let show = document.createElement("p");
    ops.forEach(element =>{
        element.addEventListener("click", () =>{
            
            
            
            show.textContent = element.innerHTML;
            display.appendChild(show);
            operator = show.textContent;
            console.log(operator);
        })
    })
}
console.log(firstNumber);
console.log(secondNumber);
console.log(operator);

function displayNumbers(){
    
        let show = document.createElement("p");
        numbers.forEach(number => {
            number.addEventListener("click", ()=>{
               
                
                show.textContent += number.value;
                display.appendChild(show);
                firstNumber = parseInt(show.textContent);
                console.log(firstNumber);
            })
        });
    
    
    
}

clearAll.addEventListener("click", ()=>{
    window.location.reload();
})


function startCalculator(){

}


displayOperators();
displayNumbers();
