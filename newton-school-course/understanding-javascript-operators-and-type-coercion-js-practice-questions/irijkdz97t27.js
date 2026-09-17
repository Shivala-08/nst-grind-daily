let a = "2";
let b = 3;
let c = "3";

// 1. Check if a is equal to b using ==
console.log(a == b);

// 2. Check if a is strictly equal to c using ===
console.log(a === c);

// 3. Check if b is not equal to c using !=
console.log(b != c);

// 4. Check if b is strictly not equal to c using !==
console.log(b !== c);

// 5. Use the && operator to check if a is less than b and c is greater than a
console.log(a < b && c > a);

// 6. Use the || operator to check if a is greater than b or c is equal to b using ==
console.log(a > b || c == b);

// 7. Determine if b is greater than a
console.log(b > a);

// 8. Determine if a is less than or equal to c
console.log(a <= c);

// 9. Using the Ternary Operator, check if b is greater than c
console.log(b > c ? "b is greater" : "c is greater or equal");