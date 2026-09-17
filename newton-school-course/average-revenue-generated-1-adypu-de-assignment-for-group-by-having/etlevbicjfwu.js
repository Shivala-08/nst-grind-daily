SELECT 
    book_title, 
    SUM(quantity_sold) AS total_quantity_sold, 
    ROUND(SUM(total_revenue) / SUM(quantity_sold), 2) AS average_revenue_per_book
FROM 
    book_sales
GROUP BY 
    book_title
HAVING 
    SUM(quantity_sold) > 50 
    AND ROUND(SUM(total_revenue) / SUM(quantity_sold), 2) > 15
ORDER BY 
    average_revenue_per_book DESC;