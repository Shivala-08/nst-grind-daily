function createCart() {
  // The cart array acts as private data, hidden from the global scope
  let cart = [];

  return {
    addItem: function(itemName) {
      cart.push(itemName);
    },
    removeItem: function(itemName) {
      // Find the first occurrence of the item
      const index = cart.indexOf(itemName);
      
      // If the item exists in the array, remove exactly one instance of it
      if (index !== -1) {
        cart.splice(index, 1);
      }
    },
    getTotalItems: function() {
      return cart.length;
    }
  };
}