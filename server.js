var express = require('express');
var app = express();

var app = require('express')();
var http = require('http').Server(app);

app.get('/GetOrdersCount', function (req, res) {
    
    res.writeHead(301, {
        'Location': 'https://08bdb249b92b67b005959abaecc386d4:42f34ed5b53d0b0bd0292fdb9a463233@questnutrition.myshopify.com/admin/orders/count.json?financial_status=authorized'
    });

    res.end();
});

http.listen(8080, '52.90.255.27', function () {
    console.log('listening on *:8080');
});
