SELECT 
    c.customer_name, 
    o.order_id, 
    o.total_amount
FROM 
    Customers c
JOIN 
    Orders o ON c.customer_id = o.customer_id
WHERE 
    o.total_amount > (
        SELECT AVG(o2.total_amount)
        FROM Orders o2
        JOIN Customers c2 ON o2.customer_id = c2.customer_id
        WHERE c2.city = c.city
    );