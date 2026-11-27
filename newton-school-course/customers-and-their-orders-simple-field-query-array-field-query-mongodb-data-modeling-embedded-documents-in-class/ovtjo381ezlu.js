db.customers.aggregate([
  {
    $lookup: {
      from: "orders",
      localField: "_id",
      foreignField: "customer_id",
      as: "customerOrders"
    }
  },
  {
    $unwind: "$customerOrders"
  },
  {
    $match: {
      "customerOrders.status": "Delivered"
    }
  },
  {
    $group: {
      _id: "$city",
      totalDeliveredAmount: { $sum: "$customerOrders.amount" }
    }
  },
  {
    $project: {
      _id: 0,
      city: "$_id",
      totalDeliveredAmount: 1
    }
  },
  {
    $sort: {
      totalDeliveredAmount: -1
    }
  }
]);