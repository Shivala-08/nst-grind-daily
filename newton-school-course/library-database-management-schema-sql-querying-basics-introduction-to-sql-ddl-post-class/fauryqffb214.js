CREATE TABLE Books(
    BookID  PRIMARY KEY DEFAULT SERIAL,
    Title VARCHAR(100),
    Author VARCHAR(100),
    Genre VARCHAR(50),
    PublishedYear INT,
    AvailableCopies INT
);
INSERT INTO Books 
VALUES (1,'The Great Gatsby','F. Scott Fitzgerald','Classic',1925,10);
SELECT *
FROM Books