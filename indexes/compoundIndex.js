db.contacts.find({ "dob.age": { $gt: 60 } });

//compound intrest - the order matters

db.contacts.createIndex({ "dob.age": 1, gender: 1 });

db.contacts.dropIndex({ "dob.age": 1, gender: 1 })

db.contacts.explain().find({ "dob.age": 35, gender: "male" });

//Sort

db.contacts.explain().find({ "dob.age": 35 }).sort({ gender: 1 });


//get indexes

db.contacts.getIndexes()

