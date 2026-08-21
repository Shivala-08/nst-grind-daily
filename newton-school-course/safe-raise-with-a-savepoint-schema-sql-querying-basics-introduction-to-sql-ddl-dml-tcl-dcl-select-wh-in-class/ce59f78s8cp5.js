UPDATE employees SET salary= salary+5000;
SAVEPOINT sp1;
DELEE FROM  employees WHERE department = 'Intern';