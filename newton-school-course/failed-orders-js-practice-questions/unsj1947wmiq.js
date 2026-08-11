function failedOrders(orders) {
  let failedCount = 0;

  // Loop through each order in the orders array
  for (const order of orders) {
    // Check if the item is in stock
    if (checkQuantity(order.name) > 0) {
      // If it is, process the order by reducing the quantity
      updateQuantity(order.name);
    } else {
      // If out of stock, it's a failed order
      failedCount++;
    }
  }

  // Return the total count of failed orders
  return failedCount;
}