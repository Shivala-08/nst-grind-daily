BEGIN;
UPDATE products SET stock = stock -1 WHERE product = 'Laptop';
COMMIT