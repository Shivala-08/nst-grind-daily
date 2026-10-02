SELECT 
    s.name AS student_name, 
    s.email, 
    c.name AS course_name, 
    e.enrolled_on
FROM students s
JOIN enrollments e ON s.id = e.student_id
JOIN courses c ON e.course_id = c.id
WHERE s.name LIKE '%av' 
  AND c.name LIKE 'Data%';