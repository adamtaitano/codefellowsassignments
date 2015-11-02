var fs = require('fs');

fs.readFile('sample.txt', function(error, data) {
  if(error) {
    console.log(error);
  }
  var textFile = data.toString('utf-8');
  fs.writeFile('new-file.txt', textFile, function(error, data) {
    if(error) {
      console.log(error);
    }
  });
});
