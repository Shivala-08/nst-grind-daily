SELECT 
department,
COUNT(*) AS student_count
FROM STUDENTS
GROUP BY department;
ORDER BY department DESC
LIMIT 1