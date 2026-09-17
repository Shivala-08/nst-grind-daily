function processGroceryOrder(order, availableStock) {
  return new Promise((resolve, reject) => {
    // 1. Check if the requested item exists in availableStock
    if (!availableStock[order.item]) {
      reject("Order failed! Item not found.");
      return;
    }

    // 2. Check if there is enough stock available for the requested quantity
    const itemStock = availableStock[order.item];
    if (order.quantity > itemStock.quantity) {
      reject("Order failed! Not enough stock.");
      return;
    }

    // 3. Simulate asynchronous task with a 2-second delay
    setTimeout(() => {
      // Calculate total cost
      const totalPrice = order.quantity * itemStock.price;
      
      resolve({
        message: "Order processed successfully!",
        item: order.item,
        quantity: order.quantity,
        totalPrice: totalPrice,
        category: itemStock.category
      });
    }, 2000);
  });
}