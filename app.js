var util = require('util');
var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var cookieParser = require('cookie-parser');

// var mongoose = require("mongoose");
// mongoose.connect("mongodb://localhost/TSHTTest");
// var db = mongoose.connection;

var UserStore = require('./models/User.js');
var PostStore = require('./models/Post.js');
var VoteStore = require('./models/Vote.js');

app.set("views", "./views");
app.set("view engine", "jade");

app.use(express.static("public"));
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use(cookieParser());

app.listen(3000);

var MongoClient = require("mongodb").MongoClient;

function getFirstUserName() {
    MongoClient.connect("mongodb://localhost:27017/TSHTTest", function(err, db) {
        if(err) {
            throw err;
        }

        db.collection("users").findOne({name: "hey"}, function (err, user) {
            db.close();
            return user.name;
        });
    });
}

app.get('/', function(req, res) {
    var firstUserName = getFirstUserName();

    res.render('index', { title: "Text Enterer", firstPost: firstUserName });
});

app.post('/', function(req, res) {
    res.render('index', { title: "Text Enterer" });
});
