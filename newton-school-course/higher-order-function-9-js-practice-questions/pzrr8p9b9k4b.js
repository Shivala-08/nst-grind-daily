function myFind(arr, callback) {
  for (let i = 0; i < arr.length; i++) {
    // Pass the current element and its index to the callback function
    if (callback(arr[i], i)) {
      return arr[i]; // Return the first element that satisfies the condition
    }
  }
  return undefined; // Return undefined if no element satisfies the condition
}