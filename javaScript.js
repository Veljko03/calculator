const display= document.getElementById("display");

const numbers = document.querySelectorAll(".number");
const clearAll = document.getElementById("clear-all");
const ops = document.querySelectorAll(".operator");
const btnEqual = document.getElementById("eq");


let firstNumber=0;
let secondNumber;
let operator="";








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
    firstNumber = parseInt(result.textContent);
    secondNumber =0;
    operator="";
    showNumber2.textContent = "";
    showNumber.textContent = "";
    
})
let showOperator = document.createElement("p");
function displayOperators(){
    
    ops.forEach(element =>{
        element.addEventListener("click", () =>{
            
            
            if(!secondNumber){
                showOperator.textContent = element.innerHTML;
                display.appendChild(showOperator);
                operator = showOperator.textContent;
            }
            
            else if(secondNumber && operator !=""){
                while(display.firstChild){
                            display.firstChild.remove();
                        }
                        firstNumber=parseInt(operate(operator,firstNumber,secondNumber));
                        showNumber.textContent = firstNumber;
                        secondNumber = 0;
                        
                        showNumber2.textContent = "";
                        display.appendChild(showNumber);
                        showOperator.textContent = element.innerHTML;
                        display.appendChild(showOperator);
                        operator = showOperator.textContent;
            }
        })
    })
    
}
console.log(firstNumber);
console.log(secondNumber);
console.log(operator);
let showNumber = document.createElement("p");
showNumber.className = "showNum";
function displayNumbers(){
    
        
            numbers.forEach(number => {
                number.addEventListener("click", ()=>{
                   
                    if(operator == ""){
                        showNumber.textContent += number.value;
                        display.appendChild(showNumber);
                         
                        firstNumber = parseInt(showNumber.textContent);
                        console.log(firstNumber);
                    // }else if(secondNumber){
                    //     while(display.firstChild){
                    //         display.firstChild.remove();
                    //     }
                    //     firstNumber=parseInt(operate(operator,firstNumber,secondNumber));
                    //     showNumber.textContent = firstNumber;
                    //     secondNumber = 0;
                    //     operator="";
                    //     showNumber2.textContent = "";
                    // }
                    
                    }
                    else if( operator != ""){
                        
                        showNumber2.textContent += number.value;
                    display.appendChild(showNumber2);
                 
                         secondNumber = parseInt(showNumber2.textContent);
                    }
                });
            });
        
      
    
        
}
let showNumber2 = document.createElement("p");
showNumber.className = "showNum2";

  

clearAll.addEventListener("click", ()=>{
    window.location.reload();
})


function startCalculator(){
    firstNumber=0;
    displayNumbers();
    displayOperators();
    
        
    
    
}

startCalculator();


