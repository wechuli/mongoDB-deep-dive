// count all documents
const dataCursor = db.movies.find();

// get all
dataCursor.forEach(doc => {
  printjson(doc);
});

dataCursor.hasNext();

//Sorting the results of the cursor

db.movies.find().sort({ "rating.average": 1,runtime:-1 }).pretty();

//Skipping and limiting Cursor Results

db.movies.find().sort({runtime:-1}).skip(239).pretty()

//Limiting
//the shell outmatically sorts, skips then limits in that order, regardless of how we placed the queries
db.movies.find().sort({"rating.average":1,runtime:-1}).skip(20).limit(2).pretty()