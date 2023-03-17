let equationArr = [];

const buttons = document.querySelectorAll(".button");
const displayEq = document.getElementById("displayEq");
const parsedEq = document.getElementById("parsedEq");

buttons.forEach((button) => addButtonEventListener(button));

function addButtonEventListener(button) {
  if (button.id === "allClearBtn") {
    button.addEventListener("click", () => clearDisplayEq());
    return;
  }
  if (button.id === "backspaceBtn") {
    button.addEventListener("click", () => deleteLastSymbol());
    return;
  }

  button.addEventListener("click", () =>
    addSymbolToEquation(button.textContent)
  );
}

function addSymbolToEquation(symbol) {
  symbol = symbol.trim();

  const isOperator = operators.some((operator) => operator.symbol === symbol);

  if (isOperator) symbol = ` ${symbol} `;

  equationArr.push(symbol);
  updateDisplayEq();
}

function deleteLastSymbol() {
  equationArr.pop();
  updateDisplayEq();
}

function clearDisplayEq() {
  equationArr.length = 0;
  parsedEq.textContent = "";
  displayEq.textContent = "0";
}

function updateDisplayEq() {
  const eqString = equationArr.join("");
  displayEq.textContent = eqString;
}

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

function operate(operator, a, b) {
  if (operator === "+") add(a, b);
  if (operator === "/") subtract(a, b);
  if (operator === "*") multiply(a, b);
  if (operator === "/") divide(a, b);
}
