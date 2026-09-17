function promiseMe(time, data) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (data !== undefined) {
                resolve(data);
            } else {
                reject("Error");
            }
        }, time);
    });
}