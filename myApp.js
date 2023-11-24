let express = require("express");
let app = express();
require("dotenv").config();

console.log("Hello world");

//Root-Level Request Logger Middleware
app.use(function (req, res, next) {
  console.log(`${req.method} ${req.path} - ${req.ip}`);
  next();
});

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
  let data = { message: "Hello json" };
  process.env.MESSAGE_STYLE === "uppercase"
    ? (data.message = data.message.toUpperCase())
    : "";

  res.json(data);
});

//Chain Middleware to Create a Time Server
app.get(
  "/now",
  function (req, res, next) {
    req.time = new Date().toString();
    next();
  },
  function (req, res) {
    data = { time: req.time };
    res.send(data);
  }
);

module.exports = app;
