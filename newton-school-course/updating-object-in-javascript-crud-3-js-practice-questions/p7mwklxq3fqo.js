function updateKeyUsingNewObject(obj, keyToUpdate, newValue) {
  // Create a shallow copy of the object using the spread operator
  const updatedObj = { ...obj };
  
  // Update the value of the specified key
  updatedObj[keyToUpdate] = newValue;
  
  return updatedObj;
}