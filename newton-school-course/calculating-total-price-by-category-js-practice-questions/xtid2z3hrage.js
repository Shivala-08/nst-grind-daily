return function totalByCategory(products,category){
    return products
        .filter((products)=> products.category === category)
  
}