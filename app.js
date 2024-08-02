var express = require('express');
var app = express();
var path = require('path');

// body-parser
var bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.use(express.static('public'));

var homeRouter = require("./app/routers/home.router");
app.use("/", homeRouter);

app.listen(3002, function () {
    console.log("Khoi tao server nodejs (localhost:3002)");
});