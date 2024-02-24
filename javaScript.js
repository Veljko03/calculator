




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

function display(){
    const numbers = document.querySelectorAll(".number");
    console.log(numbers);
}
display();