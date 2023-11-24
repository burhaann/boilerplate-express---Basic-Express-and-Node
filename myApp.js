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
app.get("/json", function (req, res) {
  let json_object = { message: "Hello json" };
  process.env.MESSAGE_STYLE === "uppercase"
    ? (json_object.message = json_object.message.toUpperCase())
    : "";

  res.json(data);
});

module.exports = app;
