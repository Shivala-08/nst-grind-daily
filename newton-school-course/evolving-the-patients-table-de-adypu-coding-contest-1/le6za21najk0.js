-- 1. Add the blood_group column with a default value of 'Unknown' for existing and future rows
ALTER TABLE patients ADD COLUMN blood_group VARCHAR(10) DEFAULT 'Unknown';
UPDATE patients SET blood_group = 'Unknown' WHERE blood_group IS NULL;

-- 2. Add the risk_score column with a check constraint ensuring values are between 0 and 10
ALTER TABLE patients ADD COLUMN risk_score INTEGER CHECK (risk_score >= 0 AND risk_score <= 10);

-- 3. Alter consultation_fee from INTEGER to NUMERIC(10, 2) to support decimal fee amounts
ALTER TABLE patients ALTER COLUMN consultation_fee TYPE NUMERIC(10, 2);

-- 4. Insert the new patient record for Neha Reddy
INSERT INTO patients (full_name, phone, age, consultation_fee, blood_group, risk_score)
VALUES ('Neha Reddy', '9911223344', 29, 550.00, 'Unknown', 7);

-- 5. Display every row of the updated table
SELECT * FROM patients;