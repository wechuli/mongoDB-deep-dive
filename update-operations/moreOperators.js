// Incrementing

db.users.updateMany({ name: "July" }, { $set: { age: 28 } });

db.users.updateOne(
  { name: "July" },
  { $inc: { age: 2 }, $set: { fakeOps: true } }
);

//Using $min,$max,and $mul

db.users.updateMany({ name: "Valentine" }, { $min: { age: 26 } });

db.users.updateMany({ name: "Valentine" }, { $max: { age: 200 } });

db.users.updateMany({ name: "Valentine" }, { $mul: { age: 0.251 } });

//Getting Rid of Fields

db.users.updateMany({ isSporty: true }, { $unset: { phone: 1 } });

//Renaming Fields
db.users.updateMany({}, { $set: { fakefield: "fake-string" } });
db.users.updateMany({}, { $rename: { fakefield: "legit_field" } });
