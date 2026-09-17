function loadResource(resourceId) {
    return new Promise((resolve, reject) => {
        // Check if resourceId is a number and is finite
        if (typeof resourceId !== 'number' || isNaN(resourceId) || resourceId <= 0) {
            reject("Invalid resource ID");
        } else {
            // Convert positive real number to an integer if necessary
            const validId = Math.floor(resourceId);
            
            // Optional: check if it falls within the expected range (1 to 1000)
            if (validId < 1 || validId > 1000) {
                reject("Invalid resource ID");
                return;
            }

            setTimeout(() => {
                resolve("Resource loaded successfully");
            }, 2000);
        }
    });
}