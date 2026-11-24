db.customerRecord.aggregate([
  {
    $group: {
      _id: "$customer_id",
      totalPurchases: { $sum: 1 },
      totalSpent: { $sum: "$amount" },
      avgPurchaseAmount: { $avg: "$amount" }
    }
  },
  {
    $set: {
      avgPurchaseAmount: { $round: ["$avgPurchaseAmount", 2] }
    }
  },
  {
    $sort: {
      totalSpent: -1
    }
  }
]);