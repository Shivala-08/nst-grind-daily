function is_perfect(number) {
    if (number <= 1) {
        return "It is not a perfect number.";
    }
    
    let sum = 0;
    for (let i = 1; i <= number / 2; i++) {
        if (number % i === 0) {
            sum += i;
        }
    }
    
    if (sum === number) {
        return "It is a perfect number.";
    } else {
        return "It is not a perfect number.";
    }
}