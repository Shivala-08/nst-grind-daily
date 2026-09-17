function mergeAndLogObjects(obj1, obj2) {
  // Merge both objects using the spread operator
  const mergedObj = { ...obj1, ...obj2 };
  
  // Log the final merged object to the console
  console.log(mergedObj);
}