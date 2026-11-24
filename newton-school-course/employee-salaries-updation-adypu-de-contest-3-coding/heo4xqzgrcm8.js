-- 1. Insert a new employee
INSERT INTO Employees (EmployeeID, Name, salary, department, YearsWorked)
VALUES (6, 'John Brown', 60000, 'Finance', 0);

-- 2. Increase salaries of Finance employees by 10%
UPDATE Employees
SET salary = salary * 1.10
WHERE department = 'Finance';

-- 3. Add a Bonus column to the Employees table
ALTER TABLE Employees
ADD COLUMN Bonus INTEGER;

-- 4. Assign a bonus of 5000 to employees with more than 5 years of experience
UPDATE Employees
SET Bonus = 5000
WHERE YearsWorked > 5;

SELECT * FROM Employees;