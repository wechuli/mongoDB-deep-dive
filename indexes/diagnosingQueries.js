db.customers.insertMany([
  {
    name: "Paul",
    age: 26,
    salary: 40
  },
  {
    name: "Wechuli",
    age: 34,
    salary: 50
  }
]);

db.customers.createIndex({ name: 1 });
db.customers.explain("executionStats").find({ name: "Paul" });

// covered queries - where the index returns the document without needing to go to the collection
db.customers
  .explain("executionStats")
  .find({ name: "Paul" }, { _id: 0, name: 1 });

//Rejecting plans
db.customers.getIndexes();

db.customers.createIndex({ age: 1, name: 1 });

db.customers.dropIndex({ name: 1 });

db.customers.explain().find({ name: "Paul", age: { $gt: 20 } });


db.customers.explain("allPlansExecution").find({name: "Paul", age: { $gt: 20 }})