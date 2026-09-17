SELECT order_id, customer_name, order_date
FROM orders
WHERE order_date >= '2025-07-01' AND order_date <= '2025-07-31'
ORDER BY order_date ASC;