SELECT 
    p.PatientName,
    COALESCE(SUM(CASE WHEN a.VisitType = 'Checkup' THEN a.Fees END), 0) AS Checkup,
    COALESCE(SUM(CASE WHEN a.VisitType = 'Surgery' THEN a.Fees END), 0) AS Surgery,
    COALESCE(SUM(a.Fees), 0) AS TotalFees
FROM 
    Patients p
LEFT JOIN 
    Appointments a ON p.PatientID = a.PatientID
WHERE 
    p.City = 'Pune'
GROUP BY 
    p.PatientID, p.PatientName
HAVING 
    TotalFees > 800
ORDER BY 
    TotalFees DESC, 
    p.PatientName ASC;