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
  symbol = addSpaceIfOperator(symbol);
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

  const eqResult = equationArr.map((symbol) => {});
}

function clearDisplay() {
  equationArr.length = 0;
  parsedEq.textContent = "";
  display.textContent = "0";
}

function updateDisplay() {
  display.textContent = equationArr.join("");
}

function addSpaceIfOperator(symbol) {
  const isOperator = operators.some((operator) => operator.symbol === symbol);
  if (isOperator) return (symbol = ` ${symbol} `);
  return symbol;
}
