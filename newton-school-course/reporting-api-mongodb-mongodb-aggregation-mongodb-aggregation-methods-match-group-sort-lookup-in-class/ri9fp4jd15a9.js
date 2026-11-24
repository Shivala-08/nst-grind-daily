db.employees.aggregate([
  {
    $lookup: {
      from: "departments",
      localField: "dept_id",
      foreignField: "_id",
      as: "department"
    }
  },
  {
    $unwind: "$department"
  },
  {
    $project: {
      name: 1,
      salary: 1,
      department: {
        department_name: 1,
        location: 1
      }
    }
  }
]);