var http = require('http');
// var http = require('hello');//module not found
var imp = require('./second_module');

http.createServer(function(req,res){
          res.writeHead(200,{'Content-Type':'text/html'});
        res.write(imp.hw());//const msg =imp2.hw(); console.log(msg);
        res.end();

   }).listen(2301);