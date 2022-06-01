const express = require("express");
const bodyParser = require("body-parser");
const ejs = require("ejs");

const app = express();
app.set("view engine", "ejs");

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));

app.get("/", function(req, res) {
    res.send("<h1>Hello World!</h1>");
});




app.listen("3000", () => {
   console.log("Server connected to port 3000");
});
