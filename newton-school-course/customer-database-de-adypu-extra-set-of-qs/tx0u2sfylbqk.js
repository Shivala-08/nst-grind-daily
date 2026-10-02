-- Create the Customers table
CREATE TABLE Customers (
    CustomerID INT PRIMARY KEY,
    CustomerName VARCHAR(50) NOT NULL,
    City VARCHAR(50),
    Country VARCHAR(50),
    Age INT
);

-- Insert the sample data
INSERT INTO Customers (CustomerID, CustomerName, City, Country, Age) VALUES
(1, 'Anishka Singh', 'Mumbai', 'India', 24),
(2, 'Aashish Jha', 'Delhi', 'India', 29);

-- Retrieve the records
SELECT * FROM Customers;