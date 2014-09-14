var express = require('express');
var app = express();

app.set("views", "./views");
app.set("view engine", "jade");
app.use(express.static("public"));

app.listen(3000)

app.get('/', function(req, res) {
    res.render('index', { title: "Helo", haaay: "<a href='yes.com'>heloa</a>" });
});
