var http = require('http');
http.createServer(function(req,res){
  res.writeHead(200, {'Content-Type': 'text/plain'});
  res.end('Hello World\n') //missing semi-colon will make the build failed
}).listen(1337, '127.0.0.1');
console.log('Server running at localhost');
