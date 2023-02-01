
const buttons = document.querySelectorAll("button");
const displayContent = document.querySelector(".display-content");

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

operate = (operator, firstNumber, secondNumber) => {
    if (operator == "+") {
        return add(firstNumber, secondNumber);
    } else if (operator == "-") {
        return subtract(firstNumber, secondNumber);
    } else if (operator == "*") {
        return multiply(firstNumber, secondNumber);
    } else if (operator == "/") {
        return divide(firstNumber, secondNumber);
    }
};

updateNumberInDisplay = (e) => {
    
    if (e.target.textContent > 0) {
        if (displayContent.textContent == 0) {
            displayContent.textContent = "";
            displayContent.textContent = e.target.textContent;
            return;
        }
        displayContent.textContent += e.target.textContent;
    }
    
};

deleteInDisplay = (e) => {
    switch (e.target.textContent) {
        
        case "AC": 
            displayContent.textContent = "";
            displayContent.textContent = 0;
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

calculate = (operator, firstNumber, e) => {
    while (updateDisplay(e) != "=") {
        updateDisplay(e);
    } 
    let secondNumber = displayContent.textContent;
    operator(operatorPlus, firstNumber, secondNumber);

}
updateDisplay = (e) => {
    
    updateNumberInDisplay(e); 

    deleteInDisplay(e);


    //    case "+":
    //        calculate("+", parseInt(displayContent.textContent), e);
    //        break;
    

};

buttons.forEach(button => button.addEventListener("click", updateDisplay));
