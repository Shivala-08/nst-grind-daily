const command = process.argv[2];
const num1 = Number(process.argv[3]);
const num2 = Number(process.argv[4]);

let result;

switch (command) {
  case "add":
    result = num1 + num2;
    break;
  case "subtract":
    result = num1 - num2;
    break;
  case "multiply":
    result = num1 * num2;
    break;
  case "divide":
    result = num1 / num2;
    break;
  default:
    result = null;
}

console.log(result);