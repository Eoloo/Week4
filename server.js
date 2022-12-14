//import 
var http = require('http');
//create server
http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/plain'});
  res.end('Good Morning Node enthuasists!');
}).listen(8080);
