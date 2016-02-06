var express = require('express');
var http = require('http');

var app = express();

app.use(express.static(__dirname + '/client'));

app.listen(process.env.PORT || 3000, function() {
	console.log("Running Server...")
});

var request = require('request');

request('https://global.api.pvp.net/api/lol/static-data/euw/v1.2/champion?champData=skins&api_key=cd1e82c2-e90e-409b-8522-bb2a77a42c7d', function(error,response,body) {
	if (!error && response.statusCode == 200) {
		console.log(body);
	} else {
		console.log(error);
	}
})