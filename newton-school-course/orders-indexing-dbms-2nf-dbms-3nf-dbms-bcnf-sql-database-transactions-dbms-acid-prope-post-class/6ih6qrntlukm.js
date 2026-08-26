create index idx_orderstatus on Orders (OrderStatus);
explain select * 
from Orders
where OrderStatus = 'Completed';