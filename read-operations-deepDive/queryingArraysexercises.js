// mongoimport boxoffice-extended.json -d boxoffice -c exmovieStats --jsonArray --drop;

// Find all movies with exactly two genres
db.exmovieStats.find({ genre: { $size: 2 } });

// Find all movies which aired in 2019

db.exmovieStats.find({ "meta.aired": 2018 });

// Find all movies which have ratings greater than 8 but lower than 10

db.exmovieStats.find({
  ratings: { $elemMatch: { $gt: 8, $lt: 10 } }
});
