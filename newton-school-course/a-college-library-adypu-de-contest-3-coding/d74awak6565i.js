SELECT s.student_name,
       COUNT(*) AS total_books_issued
FROM students s
JOIN issues i ON s.student_id = i.student_id
WHERE s.department = 'CSE'
GROUP BY s.student_name
HAVING COUNT(*) >= 2
ORDER BY total_books_issued DESC;