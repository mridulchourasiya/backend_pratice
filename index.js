const express = require("express");
const app = express();
const port = 4000;

app.get("/", (req, res) => {
  res.send("Listening");
});

app.get("/Name", (req, res) => {
  res.send("Mridul");
});

app.get("/login", (req, res) => {
  res.send("<h1>Please Login in this account form a page</h1>");
});

app.get("/youtube", (req, res) => {
  res.send("<h1>Main function</h1>");
});

app.listen(process.env.PORT, () => {
  console.log(`Example server listenig on port ${port}`);
});
