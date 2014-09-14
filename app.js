var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var cookieParser = require('cookie-parser');

var UserStore = require('./models/User.js');
var PostStore = require('./models/Post.js');
var VoteStore = require('./models/Vote.js');

app.set("views", "./views");
app.set("view engine", "jade");

app.use(express.static("public"));
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use(cookieParser());

app.listen(3000)

app.get('/', function(req, res) {
    res.render('index', { title: "Helo", haaay: "<a href='yes.com'>heloa</a>" });
});

app.post('/', function(req, res) {
    res.render('index', { title: "Helo", haaay: "<a href='yes.com'>heloa</a>" });
});
