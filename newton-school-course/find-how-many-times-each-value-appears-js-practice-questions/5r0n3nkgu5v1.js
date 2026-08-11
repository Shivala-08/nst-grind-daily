function multiplyAll(arr) {
  // Check if the array is empty
  if (arr.length === 0) {
    return 0;
  }
  
  // Use reduce to multiply all elements together
  return arr.reduce((product, num) => product * num, 1);
}