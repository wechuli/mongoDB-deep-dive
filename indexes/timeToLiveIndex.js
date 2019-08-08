db.sessions.insertOne({data:"dksafkjel",createdAt: new Date()})


// When we use Time to Live index, the document will be deleted after the specified time expires
db.sessions.createIndex({createdAt:1},{expireAfterSeconds:10})

