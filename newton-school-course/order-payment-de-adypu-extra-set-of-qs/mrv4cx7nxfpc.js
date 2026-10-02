-- Write your code here
SELECT 
    p.product_name, 
    SUM(od.quantity) AS total_quantity_sold
FROM 
    Products p
JOIN 
    Order_Details od ON p.product_id = od.product_id
GROUP BY 
    p.product_id, 
    p.product_name
ORDER BY 
    total_quantity_sold DESC;