const num1 = parseInt( prompt("Enter First number "));
const num2 = parseInt( prompt("Enter Second Number "));

const operator = prompt("What you want to do ( + , - , / , *) ");
let result = 0;
if(isNaN(num1) || isNaN(num2)){
    alert("input a number")
}else{

    if (operator == "+"){
        result = num1 + num2;
    }
    else if (operator =="-" ){
        result = num1 - num2;
    }
    else if (operator =="/" ){
        result = num1 / num2;
    }
    else if (operator =="*" ){
        result = num1 * num2;
    }
    alert( num1 + operator + num2 + " = " + result);
}