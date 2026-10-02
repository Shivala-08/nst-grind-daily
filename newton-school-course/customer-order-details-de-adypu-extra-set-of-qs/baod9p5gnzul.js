SELECT 
    c.customer_name, 
    c.city, 
    oi.product_name, 
    (oi.quantity * oi.unit_price) AS total_cost
FROM 
    Customers c
JOIN 
    Orders o ON c.customer_id = o.customer_id
JOIN 
    OrderItems oi ON o.order_id = oi.order_id
WHERE 
    o.order_date >= '2025-10-01' 
    AND o.order_date <= '2025-10-31'
    AND (oi.quantity * oi.unit_price) > 2000
ORDER BY 
    c.customer_name;