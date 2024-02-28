const display= document.getElementById("display");

const numbers = document.querySelectorAll(".number");
const clearAll = document.getElementById("clear-all");
const ops = document.querySelectorAll(".operator");
const btnEqual = document.getElementById("eq");
const btnBack = document.getElementById("back");



let firstNumber=0;
let secondNumber;
let operator="";
let point = "";








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
function procent(a,b){
    return a%b;
}




btnBack.addEventListener("click" , () =>{
    if(operator == ""){
        display.lastChild.remove();
        firstNumber =0;
        showNumber.textContent="";
    }else if(operator != "" && !secondNumber){
        display.lastChild.remove();
        operator ="";
        showOperator.textContent="";
    } else if(secondNumber){
        display.lastChild.remove();
        secondNumber =0;
        showNumber2.textContent="";
    }
})

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
    else if(userOperator == "%"){
        return procent(num1,num2);
    }
}

btnEqual.addEventListener("click",() =>{
    if(!secondNumber){
        alert("error");
    }
    
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
            
            
            console.log(point);
            if(!secondNumber){
                
                showOperator.textContent = element.innerHTML;
                display.appendChild(showOperator);
                operator = showOperator.textContent;
                point ="";
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
                        point ="";
            }
        })
    })
    
}
console.log(firstNumber);
console.log(secondNumber);
console.log(operator);
let showNumber = document.createElement("p");

function displayNumbers(){
    
        
            numbers.forEach(number => {
                number.addEventListener("click", ()=>{
                   
                    
                    if(operator == ""){
                        if(number.id == "point" && point==""){
                            
                            showNumber.textContent +=number.innerHTML;
                            display.appendChild(showNumber);
                         
                        firstNumber = parseFloat(showNumber.textContent);
                        point=".";
                        }else if(number.id == "point" && point != ""){
                            document.getElementById("point").disabled = true;
                        } else{
                        showNumber.textContent += number.value;
                        display.appendChild(showNumber);
                         
                        firstNumber = parseFloat(showNumber.textContent);
                        console.log(firstNumber);
                   
                        }
                    }
                    else if( operator != ""){
                        

                        if(secondNumber && number.id == "point" && point == ""){
                            showNumber2.textContent +=number.innerHTML;
                                display.appendChild(showNumber2);
                             
                                secondNumber = parseFloat(showNumber2.textContent);
                            point=".";
                        }else if(!secondNumber && number.id == "point" && point == ""){
                            alert("put in some number first!");
                        }else if(number.id != "point"){
                            showNumber2.textContent += number.value;
                             display.appendChild(showNumber2);
                     
                             secondNumber = parseFloat(showNumber2.textContent);
                        }else if(secondNumber && number.id == "point" && point != ""){
                            document.getElementById("point").disabled = true;

                        }
                        
                    }
                });
            });
        
      
    
        
}
let showNumber2 = document.createElement("p");


  

clearAll.addEventListener("click", ()=>{
    window.location.reload();
})


function startCalculator(){
    firstNumber=0;
    displayNumbers();
    displayOperators();
    
        
    
    
}

startCalculator();


