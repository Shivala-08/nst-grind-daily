CREATE TABLE CUSTOMERS (
    o_id INT PRIMARY KEY,
    o_name VARCHAR(50),
    age INT CHECK(o_id >=10)
)