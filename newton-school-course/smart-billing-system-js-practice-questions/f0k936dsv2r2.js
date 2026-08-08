function calculateBill(prices, quantities) {
    let subtotal = 0;
    
    // Calculate the subtotal by iterating through the arrays
    for (let i = 0; i < prices.length; i++) {
        subtotal += prices[i] * quantities[i];
    }
    
    // Calculate the discount if the subtotal is greater than 1000
    let discount = 0;
    if (subtotal > 1000) {
        discount = subtotal * 0.10; // 10% discount
    }
    
    // Calculate the final payable amount
    let payable = subtotal - discount;
    
    // Return the results in an array as requested
    return [subtotal, discount, payable];
}