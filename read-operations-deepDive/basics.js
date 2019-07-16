db.movies.findOne({});

db.movies.find({}).pretty();

// Find a specific document, with a filter
db.movies.findOne({
  name: "The Last Ship"
});

db.movies
  .find({
    runtime: 60
  })
  .pretty();

// Comparison Operators$eq	Matches values that are equal to a specified value.

// $gt	Matches values that are greater than a specified value.
// $gte	Matches values that are greater than or equal to a specified value.
// $in	Matches any of the values specified in an array.
// $lt	Matches values that are less than a specified value.
// $lte	Matches values that are less than or equal to a specified value.
// $ne	Matches all values that are not equal to a specified value.
// $nin	Matches none of the values specified in an array.

db.movies
  .find({
    runtime: {
      $lt: 60
    }
  })
  .pretty(); // find all movies less than 60 minutes

// Querying Embedded Fields and Arrays
db.movies
  .find({
    "rating.average": {
      $gt: 7
    }
  })
  .pretty(); //embedded field

db.movies
  .find({
    genres: "Anime"
  })
  .pretty(); // array - equality here with an array does not mean the item you are searching for is the only item in the array - it just means that item exists in an array,if we want exact equality, we can do the following

db.movies.find({ genres: ["Drama", "Anime", "Thriller", "Mystery"] }).pretty(); //this makes sure the array is equal to the value given in the filter

// $in and $nin

db.movies.find({ runtime: { $in: [30, 42] } }).pretty();
db.movies.find({ runtime: { $nin: [30, 42] } }).pretty();

// Logical Operators

//$and - Joins query clauses with a logical AND returns all documents that match the conditions of both clauses.
//$not - Inverts the effect of a query expression and returns documents that do not match the query expression.
//$nor - Joins query clauses with a logical NOR returns all documents that fail to match both clauses.
//$or - Joins query clauses with a logical OR returns all documents that match the conditions of either clause.

db.movies.find({ "rating.average": { $lt: 5 } }).pretty();
db.movies.find({ "rating.average": { $gt: 9.33 } }).pretty();

//or operator
db.movies
  .find({
    $or: [{ "rating.average": { $lt: 5 } }, { "rating.average": { $gt: 9.33 } }]
  })
  .pretty();

//nor operator

db.movies
  .find({
    $nor: [
      { "rating.average": { $lt: 5 } },
      { "rating.average": { $gt: 9.33 } }
    ]
  })
  .pretty();

//and operator

db.movies
  .find({
    $and: [{ "rating.average": { $gt: 9 } }, { genres: "Drama" }]
  })
  .pretty();

//we can re-write the above query above using  a shorter syntax, the $and operator exists because you might want to match multiple conditions on the same field
db.movies.find({ "rating.average": { $gt: 9 }, genres: "Drama" });

// $not operator

//look for movies not having a run time of 60
db.movies.find({ runtime: { $not: { $eq: 60 } } }).pretty();
