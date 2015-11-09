var http = require('http');

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
  if (req.url.indexOf('/greet/') > -1) {
    res.writeHead(200, {
      'Content-Type' : 'text/plain'
    });
    console.log(req.method);
    var url = req.url;
    var name = url.replace('/greet/', '');
    res.write('Hey, how are you doing, ' + name + '?');
    res.end();
  }
  if(req.method === 'POST') {
    console.log('received POST request');
        req.on('data', function(data) {
          console.log(data);
          var body = JSON.parse(data.toString('utf-8'));
          res.write('sup '+ body.name);
          res.end();
        });
  }
});

  server.listen(3000, function(err) {
    if (err) console.log(err);
    console.log('listening on port 3000...');
  });
