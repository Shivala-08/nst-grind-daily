return function evaluate(num1, num2, operation, add, sub, mul, div) {
  switch (operation) {
    case "+":
      return add(num1, num2);
    case "-":
      return sub(num1, num2);
    case "*":
      return mul(num1, num2);
    case "/":
      return div(num1, num2);
    default:
      return null;
  }
};