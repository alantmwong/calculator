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

const buttons = document.querySelectorAll("button");
const displayContent = document.querySelector(".display-content");

updateDisplay = (e) => {
    if (e.target.textContent > 0) {
        if (displayContent.textContent == 0) {
            displayContent.textContent = "";
            displayContent.textContent = e.target.textContent;
            return;
        }
        displayContent.textContent += e.target.textContent;
    }
    
    switch (e.target.textContent) {
        case "AC": 
            displayContent.textContent = "";
            displayContent.textContent = 0;
            break;
        case "DELETE":
            displayContent.textContent = 
            displayContent.textContent.substring(0, displayContent.textContent.length - 1);
        
    }

};

buttons.forEach(button => button.addEventListener("click", updateDisplay));

/* buttons.forEach(button => button.addEventListener("click", (e) => {
    console.log(e.target.textContent);
}));

*/