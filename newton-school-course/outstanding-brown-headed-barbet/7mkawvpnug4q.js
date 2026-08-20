CREATE TABLE customers (
cust_id INT PRIMARY KEY,
name VARCHAR(50) NOT NULL,
email VARCHAR(100) UNIQUE,
age INT CHECK (age >= 18),
city VARCHAR(30) DEFAULT 'Pune',
is_prime BOOLEAN DEFAULT FALSE
);
CREATE TABLE orders (
order_id INT PRIMARY KEY,
cust_id INT,
amount DECIMAL(10,2),
placed_at TIMESTAMP,
FOREIGN KEY (cust_id) REFERENCES customers(cust_id)
);
ALTER TABLE