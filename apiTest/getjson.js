//[{"id":"19","name":"Cate1"},{"id":"20","name":"Cat2"},{"id":"21","name":"cat3"},{"id":"22","name":"cat3sss"}]
var http = require('http');

http.createServer(function (req, res) {
    res.writeHead(200, { 'Content-Type': 'text/json' });
    res.end('[{"id":"19","name":"Cate1"},{"id":"20","name":"Cat2"},{"id":"21","name":"cat3"},{"id":"22","name":"cat3sss"}]');
}).listen(8080);