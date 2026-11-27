db.employees.aggregate([
  {
    $set: {
      score: { $min: ["$score", 60] },
      department: "$dept"
    }
  },
  {
    $unset: "dept"
  }
]);