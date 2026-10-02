-- Write your code here
SELECT 
    b.book_title, 
    b.book_rating, 
    o.order_date, 
    d.delivery_status
FROM 
    book_info b
JOIN 
    orders o ON b.book_id = o.book_id
JOIN 
    deliveries d ON o.order_id = d.order_id
WHERE 
    b.book_rating >= 4.0 
    AND d.delivery_status = 'Delivered';