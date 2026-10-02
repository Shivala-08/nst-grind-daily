SELECT c.customer_name, a.account_id, a.balance
FROM customers c
LEFT JOIN accounts a ON c.customer_id = a.customer_id AND a.balance > 50000;
SELECT c.customer_name, a.account_id, a.balance
FROM customers c
LEFT JOIN accounts a ON c.customer_id = a.customer_id
WHERE a.balance > 50000;