-- -- 1. cancel shows before 20 March that sold fewer than 10 seats
UPDATE shows SET is_cancelled = 't'
WHERE show_on < DATE '2026-03-20' AND seats_sold < 10;

-- 2. refund every ticket of a cancelled show
UPDATE tickets SET status = 'refunded'
WHERE id IN (SELECT id FROM shows where is_cancelled= 't');

-- 3. premium screen price revision
UPDATE shows SET base_price = ROUND(base_price *= 0.15, 2)
WHERE screen ILIKE 'IMAX';

-- 4. zero the seat counter of cancelled shows
UPDATE shows SET seats_sold = 0
WHERE is_cancelled = 't';

-- 5. purge old refunded tickets
DELETE FROM tickets
WHERE status = 'refunded' AND booked_on < DATE '2026-01-01';

-- select * from shows;