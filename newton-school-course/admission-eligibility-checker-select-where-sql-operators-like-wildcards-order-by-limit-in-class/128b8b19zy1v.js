SELECT * FROM Applicants WHERE gpa >= 3.7 AND entrance_score >= 85;

SELECT * FROM Applicants WHERE gpa >= 3.0 AND entrance_score >= 70 AND age BETWEEN 17 AND 22;

SELECT * FROM Applicants WHERE (gpa >= 2.8 OR entrance_score >= 75) AND status = 'Pending';

SELECT * FROM Applicants WHERE status != 'Pending' AND gpa > 3.5;

SELECT * FROM Applicants WHERE preferred_major IN ('Computer Science', 'Engineering') AND gpa >= 3.0;