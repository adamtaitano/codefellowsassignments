var fs = require('fs');
var bmp = require('bmp-js');
var base64 = require('base64-js');
// var atob = require('atob');

function Transformer(filePath) {
  var buffer;
  var json;
  var rawData;
  this.openFile = function() {
    // var bmpBuffer = fs.readFileSync('bitmaps/11.bmp');
    // var bmpData = bmp.decode(bmpBuffer);
    // this.buffer = bmpData;
    // return bmpData;
    var bitmap = fs.readFileSync('bitmaps/parrots.bmp');
    var string = new Buffer(bitmap).toString('base64');
    var json = base64.toByteArray(string);
    // console.log(json);
    for (var i = 0; i < json.length; i ++) {
      json[i] = 255 - json[i];
    }
    // console.log(json);
    var restring = base64.fromByteArray(json);
    console.log(restring);
    // var image = atob(restring);
    var buffer = new Buffer(restring, 'base64');
    console.log(buffer);
    fs.writeFileSync('newImage.bmp', buffer, 'base64');

      // var imageBuf = bitmap.slice(54);
      // var json = JSON.stringify(imageBuf);
      // var parsed = JSON.parse(json);
      // var imageDataArray = parsed.data;
      // var data = [];
      // for (var i = 0; i < imageDataArray.length; i ++) {
      //   data.push(255-imageDataArray[i]);
      // }
      // console.log(data);
      // console.log(this.json);
      // console.log(self.json);
    // this.buffer = bitmap;
    // this.buffer = new Buffer(bitmap).toString('base64');
  };
  this.convertBuffer = function() {
    // var json = JSON.stringify(this.buffer);
    this.json = json;
    // console.log(this.json);
    // this.buffer.data = this.buffer.data.toJSON();
    // converted = this.buffer.data;
    // return this.buffer;
  };
  this.invertColors = function() {
    var original = this.json;
    // var parsed = JSON.parse(original);
    // // console.log(parsed.data.length);

    // parsed.data = data;
    // var buffer = new Buffer(data);
    // this.rawData = buffer;
// console.log(copy);

    // console.log(data);
    // original.data.data = data;
    // this.rawData = bmp.encode(original);
  };
  this.writeFile = function() {
    // console.log(this.rawData);
  };
}

var transformed = new Transformer('bitmaps/parrots.bmp');
transformed.openFile();
transformed.convertBuffer();
transformed.invertColors();
transformed.writeFile();
// console.log(transformed.json);

module.exports = Transformer;
