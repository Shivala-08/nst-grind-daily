SELECT student_name, department, score
FROM students
WHERE score >= 80
  AND department IN ('Computer Science', 'Information Technology')
  AND (is_suspended = FALSE OR is_suspended IS NULL);