SELECT 
    c.customer_name,
    CASE 
        WHEN COUNT(o.order_id) > 0 THEN 'Active Customer'
        ELSE 'Inactive Customer'
    END AS customer_status
FROM 
    Customers c
LEFT JOIN 
    Orders o ON c.customer_id = o.customer_id
GROUP BY 
    c.customer_id, 
    c.customer_name
ORDER BY 
    c.customer_name ASC;