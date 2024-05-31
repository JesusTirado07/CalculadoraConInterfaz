const display = document.getElementById('display');
let firstOperand = null;
let secondOperand = null;
let currentOperator = null;

function appendNumber(number) {
  // Agrega el número al valor actual del display
  document.getElementById("display").value += number;

  // Determina qué operando actualizar según el operador actual
  if (currentOperator === null) {
    // Si no hay operador, actualiza el primer operando
    firstOperand = (firstOperand || '') + number;
    display.value = firstOperand;
  } else {
    // Si hay operador, actualiza el segundo operando
    secondOperand = (secondOperand || '') + number;
    display.value = secondOperand;
  }
}

function appendOperator(operator) {
  // Agrega el operador al valor actual del display
  document.getElementById("display").value += operator;

  // Verifica si se ha ingresado un número antes de agregar el operador
  if (firstOperand === null) {
    alert('Please enter a number first');
    return;
  }

  // Verifica si ya se han ingresado ambos operandos y, si es así, calcula el resultado
  if (firstOperand !== null && secondOperand !== null) {
    calculateResult();
  }

  // Actualiza el operador actual
  currentOperator = operator;
}

function calculateResult() {
  if (firstOperand !== null && secondOperand !== null && currentOperator !== null) {
    let result;

    switch (currentOperator) {
      case '+':
        result = firstOperand + secondOperand;
        break;
      case '-':
        result = firstOperand - secondOperand;
        break;
      case '*':
        result = firstOperand * secondOperand;
        break;
      case '/':
        if (secondOperand === 0) {
          alert('Cannot divide by zero');
          return;
        }
        result = firstOperand / secondOperand;
        break;
      default:
        return;
    }

    display.value = result;
    firstOperand = result;
    secondOperand = null;
    currentOperator = null;
  }
}

function clearDisplay() {
  if (display.value !== '') {
    display.value = '';
    firstOperand = null;
    secondOperand = null;
    currentOperator = null;
  }
}