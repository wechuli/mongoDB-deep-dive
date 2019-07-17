// Evaluation Operators
// - $expr - Allows use of aggregation expressions within the query language
// - $jsonSchema - Validate documents against the given JSON Schema
// - $mod - Perdorms a modulo operation on the value of a field and selects documents with a specified result
// - $regex - Selects documents where values match a specified regular expression
// - $text - Performs text search
// - $where - Matched documents that satisfy a JavaScript expression

//regex
db.movies.find({ summary: { $regex: /musical/ } }).pretty();

//expr -useful when you want to compare two fields inside one document and then find all documents where this comparison returns a certain result

db.sales.insertMany([
  {
    volume: 100,
    target: 120
  },
  {
    volume: 89,
    target: 80
  },
  {
    volume: 200,
    target: 177
  }
]);

//lets say we want to find all documents where the volume is greater than the target

db.sales.find({ $expr: { $gt: ["$volume", "$target"] } });

db.sales.find({$expr: {$gt: [{$cond: { if: { $gte: ["$volume", 190] },then: { $subtract: ["$volume", 10] },else: "$volume"}},"$target"]}}).pretty();
