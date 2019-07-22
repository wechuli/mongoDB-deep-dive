// querying an array of embedded documents
db.users.find({ "hobbies.title": "Sports" }).pretty();

//$size, Selects documents if the array field is a specific value
db.users.insertOne({
  name: "July",
  hobbies: ["sports", "cooking", "poultry"]
});

db.users.insertOne({
  name: "July",
  hobbies: [
    {
      title: "Sports",
      frequency: 1
    }
  ]
});

db.users.find({ hobbies: { $size: 3 } });

//$all -Matches arrays that contain all elements specified in the query
db.movieStats.find({ genre: { $all: ["action", "thriller"] } }).pretty();

//$elemMatch - Selects documents if element in the array field matches all the specified $elemMatch

//The two above could potentially produce undesirable results - if hobbies happen to be a collection of arrays, the matched conditions don't have to match per document

db.users.find({
  $and: [{ "hobbies.title": "Sports" }, { "hobbies.frequency": { $gte: 4 } }]
});

// below is a better implementation
db.users.find({
  hobbies: { $elemMatch: { title: "Sports", frequency: { $gte: 4 } } }
});
