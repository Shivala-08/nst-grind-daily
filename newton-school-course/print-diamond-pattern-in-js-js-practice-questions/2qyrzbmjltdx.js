// Assuming `n` is provided by the environment
// Top half of the diamond (including the middle row)
for (let i = 1; i <= n; i++) {
  let spaces = "  ".repeat(n - i);
  let stars = "* ".repeat(2 * i - 1);
  console.log(spaces + stars);
}

// Bottom half of the diamond
for (let i = n - 1; i >= 1; i--) {
  let spaces = "  ".repeat(n - i);
  let stars = "* ".repeat(2 * i - 1);
  console.log(spaces + stars);
}