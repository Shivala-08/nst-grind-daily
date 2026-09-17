const calculateSubtotal = (prices) => {
    let total = 0;
    for (let price of prices) {
        total += price;
    }
    return total;
};