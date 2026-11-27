db.employees.aggregate([
  {
    $lookup: {
      from: "departments",
      localField: "department_id",
      foreignField: "_id",
      as: "department"
    }
  },
  {
    $unwind: "$department"
  },
  {
    $lookup: {
      from: "projects",
      localField: "_id",
      foreignField: "employee_id",
      as: "project_docs"
    }
  },
  {
    $project: {
      _id: 0,
      name: 1,
      department_name: "$department.department_name",
      projects: {
        $map: {
          input: "$project_docs",
          as: "proj",
          in: "$$proj.project_name"
        }
      }
    }
  }
]);