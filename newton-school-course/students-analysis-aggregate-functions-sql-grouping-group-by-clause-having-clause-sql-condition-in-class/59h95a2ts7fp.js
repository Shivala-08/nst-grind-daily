SELECT 
department,
COUNT(*) AS student_count
FROM STUDENTS
GROUP BY department;
SELECT 
department,
(COUNT(*) AS student_count
FROM STUDENTS
GROUP BY department
ORDER BY student_count DESC
LIMIT 1;