// Step 1: Declare the required variables
let username = "john123";
let usernameLength = 7;
let minLength = 6;
let isAvailable = true;

// Step 2: Create validation variables
let meetsMinLength = usernameLength >= minLength;
let isValid = meetsMinLength && isAvailable;

// Step 3: Print the result using a template string
console.log(`Username: ${username} is valid: ${isValid}`);