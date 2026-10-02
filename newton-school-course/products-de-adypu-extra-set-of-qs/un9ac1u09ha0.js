SELECT 
    product_id, 
    product_name, 
    price,
    CASE 
        WHEN price < 50 THEN 'Low'
        WHEN price BETWEEN 50 AND 150 THEN 'Medium'
        ELSE 'High'
    END AS price_category
FROM products;