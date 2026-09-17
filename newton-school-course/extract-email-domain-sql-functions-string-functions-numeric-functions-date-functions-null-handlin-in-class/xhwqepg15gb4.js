SELECT 
    username, 
    LOWER(SPLIT_PART(email, '@', 2)) AS email_domain
FROM 
    users
ORDER BY 
    user_id;