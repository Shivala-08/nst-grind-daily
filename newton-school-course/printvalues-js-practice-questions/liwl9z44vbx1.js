function printValues(obj) {
  // Iterate through the object's values and print those greater than 50
  for (let key in obj) {
    if (obj[key] > 50) {
      console.log(obj[key]);
    }
  }
}