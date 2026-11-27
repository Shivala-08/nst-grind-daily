db.booksales.find(
  {},
  { _id: 0, title: 1, author: 1, copies_sold: 1 }
).sort({ copies_sold: -1, title: 1 })