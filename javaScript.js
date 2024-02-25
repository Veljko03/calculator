const display= document.getElementById("display");

const numbers = document.querySelectorAll(".number");
const clearAll = document.getElementById("clear-all");
const ops = document.querySelectorAll(".operator");


clearAll.addEventListener("click", ()=>{
    window.location.reload();
})








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

function operate(operator,num1,num2){
    if(operator == add){
        add(num1,num2);
        
    } 
    else if(operator == subtract){
        subtract(nu1,num2);
    } 
    else if(operator == devide){
        devide(nu1,num2);
    } 
    else if(operator == multiply){
        multiply(nu1,num2);
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
            display.appendChild(show);
        })
    });
}






displayNumbers();
displayOperators();