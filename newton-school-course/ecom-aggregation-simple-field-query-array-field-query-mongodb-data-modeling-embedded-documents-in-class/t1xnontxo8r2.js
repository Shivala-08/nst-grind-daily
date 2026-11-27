db.orders.aggregate([
  {
    $match: {
      status: "delivered",
      order_date: {
        $gte: ISODate("2025-01-01T00:00:00Z"),
        $lt: ISODate("2026-01-01T00:00:00Z")
      }
    }
  },
  {
    $addFields: {
      order_revenue: {
        $sum: {
          $map: {
            input: "$items",
            as: "item",
            in: { $multiply: ["$$item.quantity", "$$item.price"] }
          }
        }
      },
      month: { $month: "$order_date" }
    }
  },
  {
    $group: {
      _id: "$month",
      total_orders: { $sum: 1 },
      total_revenue: { $sum: "$order_revenue" }
    }
  },
  {
    $project: {
      _id: 0,
      month: "$_id",
      total_orders: 1,
      total_revenue: 1
    }
  },
  {
    $sort: {
      month: 1
    }
  }
])