function convertToFahrenheit(celsiusArray) {
    return celsiusArray.map(celsius => (celsius * 9/5) + 32);
}