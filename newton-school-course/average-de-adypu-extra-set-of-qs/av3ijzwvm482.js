SELECT ROUND(AVG(salary), 2) AS average_salary 
FROM Employee 
WHERE QUARTER(joining_date) = 2 
  AND YEAR(joining_date) = 2014;