# creating collections explicitly

db.createCollection("posts",{validator:{$jsonSchema:{bsonType:"object",required:["title,text,creator,comments"]}}})