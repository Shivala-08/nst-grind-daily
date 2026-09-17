// Assuming inputArr is already provided by the environment
for (let i = 0; i < inputArr.length; i++) {
  let element = inputArr[i];
  
  // Check if the element is an integer
  if (!Number.isInteger(element)) {
    console.log("The element is not an integer.");
  } else if (element > 0) {
    console.log("The number is positive.");
  } else if (element < 0) {
    console.log("The number is negative.");
  } else {
    console.log("The number is zero.");
  }
}