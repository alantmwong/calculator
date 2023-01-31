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
buttons.forEach(button => button.addEventListener("click", (e) => {
    displayContent.textContent += button.textContent;
}));