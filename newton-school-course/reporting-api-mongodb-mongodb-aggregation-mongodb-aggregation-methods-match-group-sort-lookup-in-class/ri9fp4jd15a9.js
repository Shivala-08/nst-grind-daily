{
  $lookup: {
    from: "departments",
    localField: "dept_id",
    foreignField: "_id",
    as: "department"
  }
}