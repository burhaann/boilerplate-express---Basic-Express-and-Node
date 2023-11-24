let express = require("express");
let app = express();

console.log("Hello world");

app.get("/string", function (req, res) {
  res.send("Hello Express");
});

absolutePath = __dirname + "/views/index.html";

app.get("/", function (req, res) {
  res.sendFile(absolutePath);
});

// app.use(express.static(__dirname + "/public"));
app.use("/public", express.static(__dirname + "/public"));

json_object = { message: "Hello json" };
app.get("/json", function (req, res) {
  res.json(json_object);
});

module.exports = app;
