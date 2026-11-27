// 1. Insert new student
db.students.insertOne({
  name: "Luna Lovegood",
  house: "Ravenclaw",
  borrowed_books: []
});

// 2. Insert new books
db.books.insertMany([
  {
    title: "Quidditch Through the Ages",
    available_copies: 4
  },
  {
    title: "Fantastic Beasts",
    available_copies: 3
  }
]);

// 3. Reference Operation: Store "Fantastic Beasts" _id in Luna Lovegood's borrowed_books
const fantasticBeasts = db.books.findOne({ title: "Fantastic Beasts" });

db.students.updateOne(
  { name: "Luna Lovegood" },
  { $push: { borrowed_books: fantasticBeasts._id } }
);

// 4. Update Operation: Decrease available_copies by 1 for "Fantastic Beasts"
db.books.updateOne(
  { _id: fantasticBeasts._id },
  { $inc: { available_copies: -1 } }
);

// 5. Output all students with borrowed book titles resolved
db.students.aggregate([
  {
    $lookup: {
      from: "books",
      localField: "borrowed_books",
      foreignField: "_id",
      as: "borrowed_book_docs"
    }
  },
  {
    $project: {
      _id: 1,
      name: 1,
      house: 1,
      borrowed_books: {
        $map: {
          input: "$borrowed_book_docs",
          as: "book",
          in: "$$book.title"
        }
      }
    }
  }
]);