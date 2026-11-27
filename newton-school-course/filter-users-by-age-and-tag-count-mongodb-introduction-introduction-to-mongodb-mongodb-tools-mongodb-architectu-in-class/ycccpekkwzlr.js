db.users.find(
  {
    age: { $gte: 30 },
    tags: { $size: 3 }
  },
  {
    name: 1,
    age: 1,
    tags: 1,
    _id: 0
  }
)