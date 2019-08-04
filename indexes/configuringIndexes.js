db.contacts.find({ "dob.age": { $gt: 60 } });

db.contacts.findOne();

//the below command will throw an error id some values for email are not unique
db.contacts.createIndex({ email: 1 }, { unique: true });

//get indexes

db.contacts.getIndexes();

//Creating a partial index
db.contacts.createIndex(
  { "dob.age": 1 },
  { partialFilterExpression: { gender: "male" } }
);

db.contacts.explain().find({ "dob.age": { $gt: 60 } });

db.contacts.explain().find({ "dob.age": { $gt: 60 }, gender: "male" });

//Applying Partial INdex

db.users.insertMany([
  {
    name: "Paul",
    email: "emailtest@yahoo.com"
  },
  {
    name: "August",
    email: "aug@test2.com"
  }
]);

db.users.createIndex({ email: 1 });

db.users.getIndexes();
db.users.dropIndex({ email: 1 });

db.users.createIndex({ email: 1 }, { unique: true });

db.users.insertOne({
  name: "Anna"
});

// below will throw an error since Anna already has an empty value for email which we specified a a unique index

db.users.insertOne({
  name: "Wechuli"
});

// to deal with this problem we can do the following - this only adds the elment to the index if that field exists
db.users.createIndex(
  { email: 1 },
  { unique: true, partialFilterExpression: { email: { $exists: true } } }
);
