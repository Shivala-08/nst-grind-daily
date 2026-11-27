db.employees.updateMany(
  {},
  [
    {
      $set: {
        score: { $min: ["$score", 60] },
        department: "$dept"
      }
    },
    {
      $unset: "dept"
    }
  ]
);