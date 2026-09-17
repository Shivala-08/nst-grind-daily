const removeKeyFromObject = (obj, keyToRemove) => {
  // Create a shallow copy of the object to avoid mutating the original one
  const newObj = { ...obj };
  
  // Delete the specified key if it exists
  delete newObj[keyToRemove];
  
  return newObj;
};