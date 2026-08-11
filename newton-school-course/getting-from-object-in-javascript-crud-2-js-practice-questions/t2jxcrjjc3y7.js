function getValueFromJSON(objectString, key) {
  // Parse the JSON string into a JavaScript object
  const parsedObject = JSON.parse(objectString);
  
  // Use bracket notation to access the value associated with the key
  return parsedObject[key];
}