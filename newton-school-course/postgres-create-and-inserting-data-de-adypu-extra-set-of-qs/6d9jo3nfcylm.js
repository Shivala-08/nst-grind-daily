CREATE TABLE Students (
    id INT,
    name VARCHAR(255),
    age INT,
    grade CHAR(1)
);

INSERT INTO Students (id, name, age, grade) VALUES
(1, 'Pranav', 20, 'A'),
(2, 'Amrita', 19, 'B');

SELECT * FROM Students;