function calculator() {
  let num1 = parseFloat(prompt("Перше число:"));
  let operator = prompt("Оператор (+, -, *, /):");
  let num2 = parseFloat(prompt("Друге число:"));

  if (isNaN(num1) || isNaN(num2) || !['+', '-', '*', '/'].includes(operator)) {
    alert("Помилка вводу!");
    return;
  }

  let result;
  if (operator === '+') result = num1 + num2;
  if (operator === '-') result = num1 - num2;
  if (operator === '*') result = num1 * num2;
  if (operator === '/') result = num2 !== 0 ? num1 / num2 : "Помилка: ділення на нуль!";

  alert(`Результат: ${result}`);
}

calculator();
