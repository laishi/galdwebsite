var express = require("express");
var app = express();


app.use(express.static(__dirname + '/gald'));

app.get('/dashboard', function(req, res) {
    res.sendFile('/dashboard.html');
});

app.get('/', function(req, res) {
    res.sendFile('/index.html');
});

app.listen(8080);

console.log("http://148.70.212.82:8080/");