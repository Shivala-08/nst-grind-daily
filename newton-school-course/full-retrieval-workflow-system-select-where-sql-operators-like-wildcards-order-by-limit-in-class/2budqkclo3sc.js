SELECT title, author, rating 
FROM Books 
WHERE rating >= 4.7 
ORDER BY rating DESC;

SELECT * 
FROM Books 
WHERE publication_year BETWEEN 2010 AND 2020 
  AND available_copies > 1;

SELECT DISTINCT genre 
FROM Books;

SELECT * 
FROM Books 
WHERE author LIKE '% M%';