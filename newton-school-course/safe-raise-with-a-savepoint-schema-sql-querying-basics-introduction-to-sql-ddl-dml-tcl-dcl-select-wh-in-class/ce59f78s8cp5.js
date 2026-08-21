BEGIN
UPDATE employees SET salary= salary+5000;
SAVEPOINT sp1;
DELEtE FROM  employees WHERE department = 'Intern';
ROLLBACK TO sp1;
COMMIT;
SELSCT * FROM employees;