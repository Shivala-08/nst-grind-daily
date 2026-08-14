return function totalByCategory(products,category){
    return products
        .filter((product)=> product.category === category)
        .reduce((total,product)=>total + product.price,0)
  
}