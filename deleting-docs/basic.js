// deleteOne

db.movieStats.deleteOne({ title: "The Last Student Returns" });

//deleteMany

db.movieStats.deleteMany({ "meta.rating": { $lt: 5 } });

db.movieStats.find({ "meta.rating": { $lt: 10 } });

// delete all documents in the collections

db.movieStats.deleteMany({})

// You can drop the collection using the drop command

db.movieStats.drop();
