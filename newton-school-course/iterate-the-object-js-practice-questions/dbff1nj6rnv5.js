function successfulOrders(orders) {
  let successfulCount = 0;

  // Loop through each order in the orders array
  for (const order of orders) {
    // Check if the item is in stock using the pre-defined function
    if (checkQuantity(order.name) > 0) {
      // If in stock, it's a successful order
      successfulCount++;
      
      // Reduce the stock quantity by 1
      updateQuantity(order.name);
    }
  }

  // Return the total count of successful orders
  return successfulCount;
}