SELECT 
    order_date, 
    COUNT(order_id) AS total_orders
FROM 
    Orders
WHERE 
    order_date >= DATE_SUB('2025-09-25', INTERVAL 226 DAY)
    AND order_date <= '2025-09-25'
GROUP BY 
    order_date
ORDER BY 
    order_date ASC;