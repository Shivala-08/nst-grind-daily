// write your mongo shell query below
// Ensure you write your query in the order as per mentioned in the instruction
// if found multple queries in the output, only final query output will be considered as submitted result.
// db.books.find({
//     $and : [
//         {language : "English"},
//         {rating : {$gt : 4.5}}
//     ]
// })

db.books.find({
    language : "English",
    rating : {$gt : 4.5}
})