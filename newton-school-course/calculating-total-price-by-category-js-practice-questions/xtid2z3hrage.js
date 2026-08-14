return function totalByCategory(products,category){
    return products
        .filter((product)=> product.category === category)
  
}