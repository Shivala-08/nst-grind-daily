db.orders.aggregate([
  {
    $group: {
      _id: "$customer_id",
      total_spent: { $sum: "$price" }
    }
  },
  {
    $sort: { total_spent: -1 }
  },
  {
    $project: {
      _id: 0,
      total_spent: 1,
      customer_id: "$_id"
    }
  }
]);