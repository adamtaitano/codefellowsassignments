var http = require('http');
var fs = require('fs');

var server = http.createServer(function(req, res) {
  if (req.url === '/' + process.argv[2]) {
    fs.readFile(__dirname + '/' + process.argv[2] + '.html', function (err, data) {
      if (err) throw err;
      res.writeHead(200, {
        'Content-Type' : 'text/html'
      });
      res.write(data);
      res.end();
    });
  }
});

server.listen(3000, function(err) {
  if (err) console.log(err);
  console.log('listening on port 3000...');
});
