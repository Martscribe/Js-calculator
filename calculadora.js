let expression = "";
let result = "";

const displayExpression = () => {
    document.getElementById("expression").innerText = expression;
};

const displayResult = () => {
    document.getElementById("result").innerText = result;
};

const clear = () => {
    expression = "";
    result = "";
    displayExpression();
    displayResult();
};

const updateExpression = value => {
    expression += value;
    displayExpression();
};

const updateResult = () => {
    result = eval(expression);
    displayResult();
};
document.getElementById("clear").addEventListener("click", clear);
document.getElementById("equals").addEventListener("click", updateResult);
const numbers = document.getElementsByClassName("number");
for (let i = 0; i < numbers.length; i++) {
    numbers[i].addEventListener("click", () => {
        updateExpression(numbers[i].innerText);
    });
}

const operators = document.getElementsByClassName("operator");
    for (let i = 0; i < operators.length; i++) {
    operators[i].addEventListener("click", () => {
        updateExpression(operators[i].innerText);
    });
}
/*
document.addEventListener("keydown", function(event) {
    switch (event.key) {
      case "1":
      case "2":
      case "3":
      case "4":
      case "5":
      case "6":
      case "7":
      case "8":
      case "9":
      case "0":
        display.value += event.key;
        break;
      case "+":
      case "-":
      case "*":
      case "/":
        display.value += event.key;
        break;
      default:
        break;
    }
  });
*/