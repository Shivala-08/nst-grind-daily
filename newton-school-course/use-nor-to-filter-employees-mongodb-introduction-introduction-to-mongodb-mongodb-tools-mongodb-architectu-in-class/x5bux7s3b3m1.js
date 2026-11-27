db.employees.find(
  {
    $nor: [
      { department: "Sales" },
      { age: { $gt: 25 } }
    ]
  },
  {
    name: 1,
    age: 1,
    department: 1,
    _id: 0
  }
)