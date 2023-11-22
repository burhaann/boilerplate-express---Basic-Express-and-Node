let express = require("express");
let app = express();

console.log("Hello world");

app.get("/string", function (req, res) {
  res.send("Hello Express");
});

absolutePath = __dirname + "/views/index.html";

app.get("/", function (req, res) {
  res.send(absolutePath);
});

module.exports = app;
