SELECT product_name,rating,reviews_count 
FROM products
ORDER BY rating,reviews DESC
LIMIT 1;
SELECT product_name,price
FROM products
LIMIT 3;