let firstNumber;
let secondNumber;
const testArea = document.querySelector(".testArea");
const resultArea = document.querySelector("#result");
const caculationButtons = document.querySelectorAll("button");

for (let button of caculationButtons) {
    button.addEventListener("click", event => {
        firstNumber = Number(document.querySelector("#firstNumber").value);
        secondNumber = Number(document.querySelector("#secondNumber").value);
        calculate(event.target.id)
    });
}

function calculate(buttonID) {
    let result;
    switch (buttonID) {
        case "add":
            result = firstNumber + secondNumber;
            break;
        case "subtract":
            result = firstNumber - secondNumber;
            break;
        case "multiply":
            result = firstNumber * secondNumber;
            break;
        case "divide":
            if (secondNumber === 0)
                alert("Phép chia 0 không thể thực hiện")
            else
                result = firstNumber / secondNumber;
            break;
        case "modulus":
            if (secondNumber === 0)
                alert("Phép chia 0 không thể thực hiện");
            else
                result = firstNumber % secondNumber;
            break;
    }
    if (result < 0) resultArea.style.color = "red"
    else resultArea.style.color = "green";
    resultArea.value = result.toFixed(2);
    testArea.textContent = result;
}