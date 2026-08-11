function solve(obj) {
  // 1. Use for...of to print all the values
  // Since objects aren't directly iterable, we use Object.values()
  for (const value of Object.values(obj)) {
    console.log(value);
  }

  // 2. Use for...in to print keys and values in {key}: {value} format
  for (const key in obj) {
    console.log(`${key}: ${obj[key]}`);
  }
}