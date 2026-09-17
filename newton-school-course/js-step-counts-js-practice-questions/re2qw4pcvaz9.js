function processNumbers(numbers, callback) {
  const result = [];

  for (let i = 0; i < numbers.length; i++) {
    const count = numbers[i];

    // Check if the number is odd
    if (count % 2 !== 0) {
      if (count > 10) {
        // Skip odd step counts greater than 10
        continue;
      } else {
        // Stop processing if odd step count is less than or equal to 10
        break;
      }
    }

    // For valid step counts (even numbers), apply the callback and store
    result.push(callback(count));
  }

  return result;
}