SELECT COUNT(*) AS total_employees_hr_after_2014 
FROM Employee 
WHERE department = 'HR' 
  AND joining_date > '2014-01-01';