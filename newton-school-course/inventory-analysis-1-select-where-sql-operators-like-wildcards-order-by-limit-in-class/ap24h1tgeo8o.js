SELECT product_name,rating,reviews_count 
FROM products
ORDER BY rating DESC
LIMIT 1;
SELECT product_name,price
FROM products
LIMIT 3;
SELECT product_name,price
FROM products
OFFSET 3
LIMIT 3;
SELECT product_name,price
FROM products
OFFSET 6
LIMIT 3