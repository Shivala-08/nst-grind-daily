CREATE TABLE courses(
    course_id INT PRIMARY KEY,
    course_name VARCHAR,
    credits INT
);
INSERT INTO courses
VALUES (1,'Databases',4)
(2,'Operating Systems',3)
(3,'Algorithms',4);
SELECT * FROM courses