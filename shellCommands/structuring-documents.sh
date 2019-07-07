
# Adding different types of data

db.companies.insertOne({name:"Fresh Apples Inc",isStartup:true,employees:33,funding:1234567890123456789,details:{ceo:"Mark"},tags:["super","awesome",{title:"perfect"}],foundingDate:new Date(),insertedAt:new Timestamp()})

db.numbers.insertOne({a:1})

db.stats

db.dropDatabase()
db.{collectionName}.drop()

# Store numbers using int32 instead of the default 64 bits
db.numbers.insertOne({a:NumberInt(1)})
