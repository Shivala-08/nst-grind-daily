function mergeAndRemove(obj1, obj2, ...keysToRemove) {
    // Merge objects with obj2 overriding obj1
    const mergedObj = { ...obj1, ...obj2 };
    
    // Remove the specified keys
    for (let key of keysToRemove) {
        delete mergedObj[key];
    }
    
    // Return the final object
    return mergedObj;
}