ALTER TABLE employees ADD COLUMN status VARCHAR DEFAULT 'active';
SELECT emp_id,emp_name,status from employees