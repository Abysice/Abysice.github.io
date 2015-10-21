var http = require('http');
var url = require('url');

var server = http.createServer(function (req, res) {
    if (req.method != 'GET')
        {return res.end('send me a GET\n');}
  
    if(url.parse(req.url, true).pathname == '/api/parsetime')
    {
        var que = url.parse(req.url,true).query;
        var date = new Date(que.iso);
        res.writeHead(200, {'Content-Type': 'application/json'});
        res.end(JSON.stringify({ hour: date.getHours(), minute: date.getMinutes(), second: date.getSeconds() }));
    }    
    if (url.parse(req.url,true).pathname == '/api/unixtime')
    {
        var que = url.parse(req.url,true).query;
        var date = new Date(que.iso);
        res.writeHead(200, {'Content-Type': 'application/json'});
        res.end(JSON.stringify({unixtime: date.getTime()}));
    }
});

server.listen(Number(process.argv[2]));
