function countValues(...objects) {
  const counts = {};
  
  // Loop through each object passed as an argument
  for (const obj of objects) {
    // Extract all values from the current object
    for (const val of Object.values(obj)) {
      // If the value exists in counts, increment it, otherwise initialize to 1
      counts[val] = (counts[val] || 0) + 1;
    }
  }
  
  return counts;
}