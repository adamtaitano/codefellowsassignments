var http = require('http');
var fs = require('fs');


var server = http.createServer(function (req, res) {
  if (req.url === '/' + process.argv[2]) {
    fs.readFile(__dirname + '/' + process.argv[2] + '.html', function (err, data) { //__dirname represents the directory in which the server.js file lives
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



// var server = http.createServer(function(req,res){
//   if(req.url === '/') {
//     console.log(req.url);
//     res.writeHead(200, {
//       'Content-Type' : 'text/html'
//     });
//     res.write(
//       `<h1>Hello World</h1>
//         <div>
//           <span>sup brah</span>
//         </div>
//     `); //back ticks or concatenated strings to make scripts/html more readable
//   }
//   res.end();
// });
