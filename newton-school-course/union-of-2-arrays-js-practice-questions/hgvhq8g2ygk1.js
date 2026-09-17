function findUnion(arr1, arr2) {
  // Combine both arrays using a Set to automatically remove duplicate elements
  const combinedSet = new Set([...arr1, ...arr2]);
  
  // Clear arr1 and push all unique sorted elements back into it
  arr1.length = 0;
  arr1.push(...Array.from(combinedSet).sort((a, b) => a - b));
}