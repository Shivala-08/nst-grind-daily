CREATE TABLE MY_PRODUCTS (
    product_id INT PRIMARY KEY,
    product_name VARCHAR(50),
    price DECIMAL(8,2),
    stock INT
);
INSERT INTO MY_PRODUCTS
VALUES (101,'Laptop',55000.00)