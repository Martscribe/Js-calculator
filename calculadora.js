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
    try {
        result = eval(expression).toString();
    } catch (error) {
        result = "Error";
    }
    displayResult();
};

const backspace = () => {
    expression = expression.substring(0, expression.length - 1);
    displayExpression();
};

document.getElementById("clear").addEventListener("click", clear);
document.getElementById("equals").addEventListener("click", updateResult);
document.getElementById("backspace").addEventListener("click", backspace);

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

const functions = document.getElementsByClassName("functions");
for (let i = 0; i < functions.length; i++) {
    functions[i].addEventListener("click", () => {
        switch (functions[i].innerText) {
            case "√":
                let sqrtnum = expression;
                expression = "";
                updateExpression(`Math.sqrt(${sqrtnum})`);
                break;
            case "x²":
                updateExpression("**2");
                break;
            case "xʸ":
                updateExpression("**");
                break;
            case "%":
                updateExpression("/100");
                break;
            case ".":
                let decimal = expression;
                expression = "";
                updateExpression(`${decimal}.`);
                break;
            case "log":
                let lognum = expression;
                expression = "";
                updateExpression(`Math.log(${lognum})`);
                break;
            case "!":
                updateExpression("!");
                break;
        }
    });
}