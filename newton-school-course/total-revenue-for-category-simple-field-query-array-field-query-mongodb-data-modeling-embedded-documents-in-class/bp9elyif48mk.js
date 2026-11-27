db.sales.aggregate([
  {
    $group: {
      _id: "$category",
      totalRevenue: {
        $sum: { $multiply: ["$quantity", "$price"] }
      }
    }
  },
  {
    $sort: {
      _id: 1
    }
  },
  {
    $project: {
      _id: 0,
      category: "$_id",
      totalRevenue: 1
    }
  }
]);