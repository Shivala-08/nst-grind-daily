ALTER TABLE students ADD COLUMN Branch Varchar(20);
ALTER TABLE students 
ADD COLUMN NAME varchar(30),
ADD COLUMN SURNAME varchar (40),
ADD COLUMN DIVISION varchar(50);
ALTER TABLE students ALTER COLUMN name TYPE varchar(20);