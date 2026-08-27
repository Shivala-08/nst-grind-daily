-- Task 1: Retrieve highly rated (>= 4.7) books (title, author, rating) ordered by rating descending
SELECT title, author, rating 
FROM Books 
WHERE rating >= 4.7 
ORDER BY rating DESC;

-- Task 2: Retrieve books published between 2010 and 2020 with > 1 available copies
SELECT * 
FROM Books 
WHERE publication_year BETWEEN 2010 AND 2020 
  AND available_copies > 1;

-- Task 3: Retrieve unique genres
SELECT DISTINCT genre 
FROM Books;

-- Task 4: Retrieve authors whose last name starts with M
SELECT * 
FROM Books 
WHERE author LIKE '% M%';