//using projection to shape our results

db.movies.find().limit(5).pretty()

// returning fields for the documents we are interested in
db.movies.find({},{name:1,genres:1,runtime:1,rating:1}).limit(2).pretty()

db.movies.find({},{name:1,genres:1,runtime:1,rating:1,"schedule.time":1}).limit(2).pretty()

//projection in arrays
db.movies.find({genres:"Drama"},{"genres.$":1}).limit(2).pretty()

//
db.movies.find({genres:"Drama"},{genres:{$elemMatch:{$eq:"Horror"}}}).limit(10)

// slice 

db.movies.find({"rating.average":{$gt:9}},{genres:{$slice:2},name:1})
db.movies.find({"rating.average":{$gt:9}},{genres:{$slice:[1,2]},name:1})