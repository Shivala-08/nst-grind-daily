-- 1. write code for Create Index below this

-- 2. write code to verify index below this
-- 1. Create an index named idx_status on the Status column
CREATE INDEX idx_status ON Purchases(Status);

-- 2. Write a SQL query to verify whether this index is being used
EXPLAIN SELECT * 
FROM Purchases 
WHERE Status = 'Completed';