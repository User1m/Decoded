
var port = process.env.PORT || 8000;
var baseHost = process.env.WEBSITE_HOSTNAME || 'localhost';

var http = require('http');
var express = require('express');

var app = express();

var server = http.createServer(app);

app.use('/', express.static(__dirname + '/html'));

server.listen(port, 'localhost', function () {
    console.log("Server started on port: " + port);
});
