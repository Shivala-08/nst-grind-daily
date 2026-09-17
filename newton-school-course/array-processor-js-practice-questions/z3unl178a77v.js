function processArray(array, callback) {
    array.forEach(element => {
        console.log(callback(element));
    });
}