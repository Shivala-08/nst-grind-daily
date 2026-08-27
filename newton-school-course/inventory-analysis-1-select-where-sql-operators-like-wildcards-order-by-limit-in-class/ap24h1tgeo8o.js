SELECT product_name, rating, reviews_count 
FROM products 
ORDER BY rating DESC, reviews_count DESC 
LIMIT 1;


SELECT product_name, price 
FROM products 
LIMIT 3 OFFSET 0;

SELECT product_name, price 
FROM products 
LIMIT 3 OFFSET 3;

SELECT product_name, price 
FROM products 
LIMIT 3 OFFSET 6;

SELECT product_name, price 
FROM products 
WHERE in_stock = true 
ORDER BY price ASC 
LIMIT 3;