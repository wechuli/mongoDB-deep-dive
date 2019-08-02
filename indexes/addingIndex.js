db.contacts.find({ "dob.age": { $gt: 60 } });

db.contacts.find({ "dob.age": { $gt: 60 } }).count();

// tool for exploring queries

db.contacts.explain().find({ "dob.age": { $gt: 60 } });
// winningPlan  describes how the query was done

db.contacts.explain("executionStats").find({ "dob.age": { $gt: 60 } });

// Adding indexes

//-1 -descending, 1-ascending
db.contacts.createIndex({ "dob.age": 1 });
//If we repeat the query - db.contacts.find({ "dob.age": { $gt: 60 } }).count();
//MongoDB will get the documents far much faster than previously since it is now using an Index
