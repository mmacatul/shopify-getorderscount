//var express = require('express');
//var app = express();
//var fs = require("fs");

var app = require('express')();
var http = require('http').Server(app);

app.get('/GetOrdersCount', function (req, res) {
    
    res.writeHead(301, {
        'Location': ''
    });

    res.end();
});

http.listen(3000, function () {
    console.log('listening on *:3000');
});
