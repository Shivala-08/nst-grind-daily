function loadResource(resourceId) {
  return new Promise((resolve, reject) => {
    // If the data is a positive real number, convert it to an integer
    let id = Number(resourceId);

    // Check if it's a valid number and a positive integer
    if (isNaN(id) || id <= 0 || !Number.isFinite(id)) {
      reject("Invalid resource ID");
    } else {
      // Convert to integer if it's a positive real number (e.g., 2.5 becomes 2, or use Math.floor / Math.trunc)
      id = Math.trunc(id);

      // Simulate a delay of 2 seconds
      setTimeout(() => {
        resolve("Resource loaded successfully");
      }, 2000);
    }
  });
}