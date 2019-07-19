// Import the data into a new database and collection

// mongoimport boxoffice.json -d boxoffice -c movieStats --jsonArray --drop;

//Search all movies that have a rating higher than 9.2 and a runtime lower than 100 minutes

db.movieStats.find({
    "meta.rating": {
        $gt: 9.2
    },
    "meta.runtime": {
        $lt: 100

    }
}).pretty()

//Searhc all movies that have a genre of "drama" or "action"

db.movieStats.find({
    "genre": {
        $in: ["drama", "action"]
    }
}).pretty()

//alternatively
db.movieStats.find({
    $or: [{
        genre: "drama"
    }, {
        genre: "action"
    }]
}).pretty()

// Search all movies where visitors exceeded expectedVisitors


db.movieStats.find({
    $expr: {
        $gt: ["$visitors", "$expectedVisitors"]
    }
})