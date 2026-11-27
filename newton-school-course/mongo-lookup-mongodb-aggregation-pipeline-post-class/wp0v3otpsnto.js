db.employees.aggregate([
  {
    $lookup: {
      from: "departments",
      localField: "department_id",
      foreignField: "_id",
      as: "department_info"
    }
  },
  {
    $unwind: {
      path: "$department_info",
      preserveNullAndEmptyArrays: true
    }
  },
  {
    $project: {
      _id: 0,
      name: 1,
      department_name: "$department_info.department_name"
    }
  }
]);