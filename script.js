import { evaluate } from "mathjs";

let equationArr = [];

const buttons = document.querySelectorAll(".button");
const display = document.querySelector("#displayEq");
const parsedEq = document.querySelector("#parsedEq");
const operators = [
  {
    symbol: "+",
    function: (a, b) => a + b,
  },
  {
    symbol: "-",
    function: (a, b) => a - b,
  },
  {
    symbol: "*",
    function: (a, b) => a * b,
  },
  {
    symbol: "/",
    function: (a, b) => a / b,
  },
  {
    symbol: "%",
    function: (a, b) => a % b,
  },
  {
    symbol: "=",
  },
];

buttons.forEach((button) => addButtonEventListener(button));

function addButtonEventListener(button) {
  if (button.id === "allClearBtn") {
    button.addEventListener("click", () => clearDisplay());
    return;
  }
  if (button.id === "backspaceBtn") {
    button.addEventListener("click", () => deleteLastSymbol());
    return;
  }
  if (button.id === "equalsBtn") {
    button.addEventListener("click", () => evaluate());
    return;
  }
  button.addEventListener("click", () =>
    addSymbolToEquation(button.textContent)
  );
}

function addSymbolToEquation(symbol) {
  symbol = symbol.trim();
  const lastSymbol = equationArr.slice(-1)[0];

  const isOperator = operators.some((operator) => operator.symbol === symbol);
  if (isOperator) {
    // Check if last symbol was an operator and change it to new operator if true
    const isLastOperator = operators.some((operator) => {
      if (lastSymbol) return operator.symbol === lastSymbol.trim();
    });
    if (isLastOperator) equationArr.pop();

    symbol = ` ${symbol} `;
  }

  equationArr.push(symbol);
  updateDisplay();
}

function deleteLastSymbol() {
  equationArr.pop();
  if (equationArr.length === 0) {
    display.textContent = "0";
    return;
  }
  updateDisplay();
}

function evaluate() {
  parsedEq.textContent = `${display.textContent} =`;

  const equationString = equationArr.join("");
}

function clearDisplay() {
  equationArr.length = 0;
  parsedEq.textContent = "";
  display.textContent = "0";
}

function updateDisplay() {
  display.textContent = equationArr.join("");
}
