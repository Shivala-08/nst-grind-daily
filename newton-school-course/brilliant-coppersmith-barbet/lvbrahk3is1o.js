CREATE TABLE departments (
dept_id INT PRIMARY KEY,
dept_name VARCHAR(50) NOT NULL
);
CREATE TABLE emp_backup AS SELECT * FROM employees;