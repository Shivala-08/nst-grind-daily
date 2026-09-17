const process = require("process");

function greetUser() {
  // Extract name and city from command-line arguments
  const name = process.argv[2];
  const city = process.argv[3];

  // Return the formatted welcome message
  return `Hello ${name}! Welcome from ${city}`;
}