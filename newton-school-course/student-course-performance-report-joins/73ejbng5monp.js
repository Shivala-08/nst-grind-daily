SELECT 
    s.FirstName, 
    s.LastName, 
    c.CourseName, 
    g.Grade
FROM Students s
JOIN Enrollments e ON s.StudentID = e.StudentID
JOIN Courses c ON e.CourseID = c.CourseID
LEFT JOIN Grades g ON e.EnrollmentID = g.EnrollmentID
ORDER BY s.StudentID ASC, c.CourseID ASC;