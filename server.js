var http = require('http');
var fs = require('fs');
var user;
var profile;

fs.readFile('./index.html', function (err, html) {

    if (err) throw err;
});
server = http.createServer( function(req, res) {

    console.dir(req.param);

    if (req.method == 'POST') {
        console.log("POST");
        req.on('data', function (data) {
            user += data;

            profile = user.getBasicProfile();
            console.log("Partial body: " + profile.getName());
        });
        req.on('end', function () {
            console.log("Body: " + body);
        });
        res.writeHead(200, {'Content-Type': 'text/html'});
        res.end('post received');
    }
    else
    {
        console.log("GET");
        //var html = '<html><body><form method="post" action="http://localhost:3000">Name: <input type="text" name="name" /><input type="submit" value="Submit" /></form></body>';
        var html = fs.readFileSync('index.html');
        res.writeHead(200, {'Content-Type': 'text/html'});
        res.end(html);
    }

});

    port = 4200;
    host = '127.0.0.1';
    server.listen(port, host);
    console.log('Listening at http://' + host + ':' + port);