SELECT department, COUNT(*) AS student_count
FROM students
GROUP BY department
ORDER BY department ASC;