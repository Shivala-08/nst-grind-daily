SELECT order_id, customer_name, order_date
FROM orders
WHERE order_date >= DATE '2025-07-20' - INTERVAL '30 days'
  AND order_date <= DATE '2025-07-20'
ORDER BY order_date DESC;