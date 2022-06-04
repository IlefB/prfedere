const http=require('http')
http.createServer(function(req,res){
    res.end('hello ilef')
}).listen(3000,'127.0.0.2')