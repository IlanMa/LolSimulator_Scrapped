var express = require('express');
var http = require('http');

var app = express();

// app.use(express.static(__dirname + '/client'));

app.listen(process.env.PORT || 3000, function() {
	console.log("Running Server...")
});

app.get('/', function(req, res) {
    res.sendfile('client/index.html')
});
