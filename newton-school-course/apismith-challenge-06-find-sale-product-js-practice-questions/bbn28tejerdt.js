async function getSaleProducts(api, clothingType) {
  try {
    // 1. Fetch product data from the provided API
    const response = await fetch(api);
    
    if (!response.ok) {
        return [];
    }
    
    const products = await response.json();

    // 2. Filter the results for the specified clothingType and sale status
    const filteredProducts = products.filter(product => {
      const isMatchCategory = product.category === clothingType;
      // Covering common variations for a boolean sale status field
      const isOnSale = product.isSale === true || 
                       product.onSale === true || 
                       product.saleStatus === true || 
                       product.sale === true; 
                       
      return isMatchCategory && isOnSale;
    });

    // 3. Return a promise that resolves to an array of matching product names
    return filteredProducts.map(product => product.name);
    
  } catch (error) {
    // Return an empty array if the fetch fails or no products match
    return [];
  }
}

// If using commonJS modules on the platform
// module.exports = getSaleProducts;