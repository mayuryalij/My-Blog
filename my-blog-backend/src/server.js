const dotenv = require("dotenv");
dotenv.config();
const express = require("express");
const bodyParser = require("body-parser");
const { MongoClient } = require("mongodb");
const port = process.env.PORT;

const app = express();

app.use(bodyParser.json());  

// Connect to DATABASE
const DATABASE_URL = process.env.DATABASE_URL;


const withDB = async (operations, res) => {
  try {
    const client = await MongoClient.connect(
      DATABASE_URL ,
      { useUnifiedTopology: true, useNewUrlParser: true }
    );
    const db = client.db("my-blog");
    await operations(db);
    client.close();
  } catch (error) {
    res.status(500).json({ message: "Error connecting to db", error });
  }
};

app.get("/api/articles/:name", async (req, res) => {
  withDB(async (db) => {
    const articleName = req.params.name;
    const articleInfo = await db
      .collection("articles")
      .findOne({ name: articleName });
    res.status(200).json(articleInfo);}, res);
});

app.post("/api/articles/:name/add-comments", (req, res) => {
  const { username, text } = req.body;
  const articleName = req.params.name;

  withDB(async (db) => {
    const articleInfo = await db
      .collection("articles")
      .findOne({ name: articleName });
    await db.collection("articles").updateOne(
      { name: articleName },
      {
        $set: {
          comments: articleInfo.comments.concat({ username, text }),
        },
      }
    );
    const updatedArticleInfo = await db
      .collection("articles")
      .findOne({ name: articleName });
    res.status(200).json(updatedArticleInfo);
  }, res);

});

// Start Server
app.listen(port, () => console.log(`App listening on port ${port}!`))
