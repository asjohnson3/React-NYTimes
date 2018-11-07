const mongoose = require("mongoose");
const db = require("../models");

// This file empties the saved Articles collection and inserts the books below

mongoose.connect(
  process.env.MONGODB_URI ||
  "mongodb://localhost/NYTimesArticles"
);

const articleSeed = [
  {
    title: "Example Article Number 1",
    author: "John Doe",
    summary:
      "This is going to be the beginning set of data used for populating the database",
    date: new Date(Date.now())
  },
  {
    title: "Number 2 Example Article",
    author: "Jane Doe",
    summary:
      "Second example summary for article",
    date: new Date(Date.now())
  },
  {
    title: "3",
    author: "Joe",
    summary:
      "Numero trois",
    date: new Date(Date.now())
  }
];

db.Article
  .remove({})
  .then(() => db.Article.collection.insertMany(articleSeed))
  .then(data => {
    console.log(data.result.n + " records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });
