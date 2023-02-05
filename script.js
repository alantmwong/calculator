/* Calculator project 
Author: Alan Wong
Date: 1/2/2023

*/

// Setting up event listeners 
const buttons = document.querySelectorAll("button");
const displayContent = document.querySelector(".display-content");

// Basic operator functions 
add = (firstNumber, secondNumber) => {
    return firstNumber + secondNumber;
};

subtract = (firstNumber, secondNumber) => {
    return firstNumber - secondNumber;
};

multiply = (firstNumber, secondNumber) => {
    return firstNumber * secondNumber;
};

divide = (firstNumber, secondNumber) => {
    return firstNumber / secondNumber;
};

// Operate links the basic operator functions to perform a calculation
// with any operator. 
operate = (operator, firstNumber, secondNumber) => {
    if (operator == "+") {
        return add(firstNumber, secondNumber);
    } else if (operator == "−") {
        return subtract(firstNumber, secondNumber);
    } else if (operator == "×") {
        return multiply(firstNumber, secondNumber);
    } else if (operator == "÷") {
        return divide(firstNumber, secondNumber);
    }
};

// Whenever a number is pressed, it will add the number to the display - i.e. 
// displayContent. 
updateNumberInDisplay = (e) => {

    if (e.target.textContent >= 0) {
        if (displayContent.textContent == 0) { // to clear the original zero
            displayContent.textContent = "";
            displayContent.textContent = e.target.textContent;
            return;
        }
        
        if (calcVar.answer != "") {
            displayContent.textContent = "";
        }
        displayContent.textContent += e.target.textContent;
    }
    
};

// When the AC button is pressed, this function deletes the entire displayContent
// when DELETE is pressed, the function deletes the end character of displayContent
deleteInDisplay = (e) => {
    switch (e.target.textContent) {
        
        case "AC": 
            displayContent.textContent = "";
            displayContent.textContent = 0;
            calcVar.firstInt = "";
            calcVar.operator = "";
            calcVar.answer = "";

            break;

        case "DELETE":
            if (displayContent.textContent.substring.length > 1) {
                displayContent.textContent = displayContent.textContent.substring(
                                        0, displayContent.textContent.length - 1);
            }
            if (displayContent.textContent.length == '') {
                displayContent.textContent = 0;
            }
            break;
        
    }
}; 

// Pseudocode: 
// 1. When the plus operator is clicked, save the integer in the display
// 2. If the next button/s that are clicked are numbers, delete the old display number and show the new number
// 3. When the equals button is clicked, use the "+" operator with the two numbers 
// to perform the calculation, then set the new display number equal to the output of operate(). 

// now need to work on completing the chaining of calculations

// calcVar is an object that stores the operator and first integer from when 
// the user clicks an operator. This is then to be used in the "=" part of the switch
// statement. An idea now is to make the plus minus multiply and divide cases all operate
// like the equals case so that I'm able to chain the calculations. 

let calcVar = {
    firstInt: "",
    operator: "",
    answer: "",
};

performOperatorCalc = (e) => {
    switch (e.target.textContent) {
        case "+":
        case "×":
        case "−":
        case "÷":
            if (calcVar.operator != "") {
                calcVar.answer = operate(calcVar.operator, parseInt(calcVar.firstInt),
                                    parseInt(displayContent.textContent));
                displayContent.textContent = calcVar.answer;
            }
            calcVar.firstInt = displayContent.textContent;
            calcVar.operator = e.target.textContent;
            if (calcVar.answer == "") {
                displayContent.textContent = 0;
            }
            break;
        case "=": 
            calcVar.answer = operate(calcVar.operator, parseInt(calcVar.firstInt), 
                                parseInt(displayContent.textContent));
            displayContent.textContent = calcVar.answer;
            calcVar.operator = "";
            break;
    }

}

updateDisplay = (e) => {
    
    updateNumberInDisplay(e); 
    deleteInDisplay(e);
    performOperatorCalc(e);

};

buttons.forEach(button => button.addEventListener("click", updateDisplay));
