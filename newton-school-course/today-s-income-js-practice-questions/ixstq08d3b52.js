function getTotalIncomeGenerated(orders) {
    let totalIncome = 0;
    
    for (let order of orders) {
        // 1. Check stock using checkQuantity(name)
        const stock = checkQuantity(order.name);
        
        // 2. If available (stock > 0)
        if (stock > 0) {
            // Add the price to income
            totalIncome += order.price;
            // Reduce stock by 1 using updateQuantity(name)
            updateQuantity(order.name);
        }
        // 3. If out of stock, skip the order
    }
    
    return totalIncome;
}