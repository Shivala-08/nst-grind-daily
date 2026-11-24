db.customerRecord.aggregate([
  {
    $group: {
      _id: "$customer_id",
      totalPurchases: { $sum: 1 },
      totalSpent: { $sum: "$amount" },
      avgPurchaseAmount: {
        $round: [{ $avg: "$amount" }, 2]
      }
    }
  },
  {
    $sort: {
      totalSpent: -1
    }
  }
]);