db.user.insertMany([{
    firstname: "Paul",
    lastname: "Wechuli",
    email: "wechulipaul@yahoo.com",
    doB: new Date(1993 - 03 - 20),
    password: "mysupper secure pasword"
  },
  {
    firstname: "Mercy",
    lastname: "Cheroitich",
    email: "mercy@gmail.com",
    doB: new Date(1996 - 03 - 20),
    password: "pass"
  }
])

db.blogpost.insertMany([{
    title: "the end of the world",
    body: "The world has ended, I repeat the world has ended, but wait, how am I writing a blog if the world has ended",
    created: new Date(),
    blogger: ObjectId("5d2189afc062f7de40dddb99")
  },
  {
    title: "The Original sin",
    body: "What do you think the original sin is anyway?, I have no idea, something to do with a bush woman eating somekind of fruit, not sure what fruit it was",
    created: new Date(),
    blogger: ObjectId("5d2189afc062f7de40dddb99")
  },
  {
    title: "Chick Flicks",
    body: "For an adult, I sure do love watching chick flicks when I get the time to do just that",
    created: new Date(),
    blogger: ObjectId("5d2189afc062f7de40dddb9a")
  }
]);

db.posts.insertMany([{
    title: "the end of the world",
    text: "The world has ended, I repeat the world has ended, but wait, how am I writing a blog if the world has ended",
    created: new Date(),
    creator: ObjectId("5d23201d8a00dc9b8839afaf"),
    comments: [{
        text: "this is a silly blog post",
        author: ObjectId("5d23201d8a00dc9b8839afaf")
      },
      {
        text: "dude, what the f is this shit",
        author: ObjectId("5d23201d8a00dc9b8839afb0")
      }
    ]
  },
  {
    title: "The Original sin",
    text: "What do you think the original sin is anyway?, I have no idea, something to do with a bush woman eating somekind of fruit, not sure what fruit it was",
    created: new Date(),
    creator: ObjectId("5d23201d8a00dc9b8839afaf")
  },
  {
    title: "Chick Flicks",
    text: "For an adult, I sure do love watching chick flicks when I get the time to do just that",
    created: new Date(),
    creator: ObjectId("5d23201d8a00dc9b8839afb0")
  }
]);


db.posts.insertOne({

  text: "For an adult, I sure do love watching chick flicks when I get the time to do just that",
  created: new Date(),
  creator: ObjectId("5d23201d8a00dc9b8839afb0")
})
//Add comments as embedded documents of the blog collection
db.blogpost.updateOne({
  title: "the end of the world"
}, {
  $push: {
    comments: {
      body: "What hogwash nonsense",
      author: ObjectId("5d2189afc062f7de40dddb99"),
      created: new Date()
    }
  }
});

db.blogpost.aggregate([{
  $lookup: {
    from: "blogger",
    localField: "blogger",
    foreignField: "_id",
    as: "bloggerDetails"
  }
}]);

db.blogpost.aggregate([{
    $lookup: {
      from: "blogger",
      localField: "blogger",
      foreignField: "_id",
      as: "bloggerDetails"
    }
  },
  {
    $lookup: {
      from: "blogger",
      localField: "comments.author",
      foreignField: "_id",
      as: "commentDetails"
    }
  }
]);