var express = require('express');
var app = express();
var path = require('path');

app.set('port',3000);

app.use(express.static(path.join(__dirname + '/public')));

var server = app.listen(app.get('port'),function() {
	var port = server.address().port;
	console.log('Stuff happening in '+ port);

app.get('/', function(req, res) {
	res.sendFile(path.join(__dirname + '/index.html'))
});

console.log('Running in testing server');
