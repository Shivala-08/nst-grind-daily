SELECT * FROM Patients 
WHERE department IN ('Cardiology', 'Neurology') 
  AND status IN ('Admitted', 'Critical');

SELECT * FROM Patients 
WHERE diagnosis LIKE '%Artery%' 
   OR diagnosis LIKE '%Bronchitis%';

SELECT * FROM Patients 
WHERE gender = 'Female' 
  AND age > 30 
  AND insurance IN ('StarHealth', 'MaxBupa') 
ORDER BY age DESC;