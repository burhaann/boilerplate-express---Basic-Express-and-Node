let express = require("express");
let app = express();
require("dotenv").config();

console.log("Hello world");

//Serve STRING
app.get("/string", function (req, res) {
  res.send("Hello Express");
});

//Serve HTML
absolutePath = __dirname + "/views/index.html";

app.get("/", function (req, res) {
  res.sendFile(absolutePath);
});

//static Public Assets
// app.use(express.static(__dirname + "/public"));
app.use("/public", express.static(__dirname + "/public"));

//JSON format
json_object = { message: "Hello json" };
app.get("/json", function (req, res) {
  //Using .ENV
  if (process.env.MESSAGE_STYLE === uppercase) {
    res.json(json_object.toUpperCase());
  } else {
    res.json(json_object);
  }
});

module.exports = app;
