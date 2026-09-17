function processGroceryOrder(order, availableStock) {
  return new Promise((resolve, reject) => {
    // 1. Check if the item exists in availableStock
    if (!availableStock || !availableStock[order.item]) {
      reject("Order failed! Item not found.");
      return;
    }

    const itemStock = availableStock[order.item];

    // 2. Check if there is enough stock available
    if (order.quantity > itemStock.quantity) {
      reject("Order failed! Not enough stock.");
      return;
    }

    // 3. Simulate asynchronous task with a 2-second delay
    setTimeout(() => {
      // Deduct the ordered quantity from the available stock
      itemStock.quantity -= order.quantity;

      // Resolve with the exact success string message required
      resolve("Order processed successfully!");
    }, 2000);
  });
}