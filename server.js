var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var math = require('mathjs');
var port = 3000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.use(express.static(__dirname + '/public'));

app.listen(port);


