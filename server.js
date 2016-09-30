var express = require('express');
var app = express();
var path = require('path');

app.get('/', function(req, res) {
	res.sendFile(path.join(__dirname + '/index.html'))
});
app.use('/static', express.static(__dirname));
app.listen(3000);

