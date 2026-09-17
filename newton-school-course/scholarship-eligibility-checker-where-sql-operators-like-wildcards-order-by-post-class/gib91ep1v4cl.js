SELECT student_name , department, score FROM students WHERE
is_suspended is FALSE AND score >= 80 AND department IN ('Computer Science','Information Technology');