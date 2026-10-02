SELECT DISTINCT c.customer_name
FROM Customers c
JOIN Orders o ON c.customer_id = o.customer_id
JOIN Payments p ON o.order_id = p.order_id
WHERE p.amount > (SELECT AVG(amount) FROM Payments);