var http = require('http');
var url = require('url');
var fs = require('fs');

http.createServer(function (req, res) {
    fs.readFile('calculator.html', function(err, data) {
        if (err) {
            res.writeHead(404, {'Content-Type': 'text/html'});
            return res.end("404 Not Found");
        }
        res.writeHead(200, {'Content-Type': 'text/html'});
        res.write(data);
        return res.end();
    });
}).listen(9393);

function calculator(x){
    var f = ((pow(x) - 5 * x + 4)/(x - 4));
    return f;
}


