const express = require("express");
require("./db");

const app = express();
const port = process.env.PORT;
const chapterRouter = require("./routers/chapter");


app.use(express.json());
app.use(chapterRouter);

app.get("/", (req, res) => {
  res.send("Welcome to the app");
});

app.listen(port, () => {
  console.log(`The server is up and running on ${port}`);
});
