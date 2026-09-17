function successfulOrders(orders) {
    let count = 0;
    
    for (let order of orders) {
        let stock = checkQuantity(order.name);
        if (stock > 0) {
            count++;
            updateQuantity(order.name);
        }
    }
    
    return count;
}