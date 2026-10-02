SELECT 
    order_id, 
    customer_name, 
    order_amount, 
    CASE 
        WHEN order_amount < 100 THEN '10%'
        WHEN order_amount BETWEEN 100 AND 500 THEN '20%'
        ELSE '30%'
    END AS discount_rate
FROM orders;