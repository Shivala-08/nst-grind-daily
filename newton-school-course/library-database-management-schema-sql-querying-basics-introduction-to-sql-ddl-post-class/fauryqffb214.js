CREATE TABLE Books(
    BookID INT PRIMARY KEY,
    Title VARCHAR(100),
    Author VARCHAR(100),
    Genre VARCHAR(50),
    PublishedYear INT,
    AvailableCopies INT
)
INSERT INTO Books 
VALUES ('The Great Gatsby','F. Scott Fitzgerald','Classic',1925,10)