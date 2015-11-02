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
    var bitmap = fs.readFileSync('bitmaps/11.bmp');
    var buffer = new Buffer(bitmap);
    var le = buffer.readUIntLE(10,4);
    // console.log(le);
    var offsetBuffer = buffer.slice(le);
    // console.log(offsetBuffer);
    var json = JSON.stringify(offsetBuffer);
    // console.log(le);
    // console.log(json);
    var parsed = JSON.parse(json);
    var data = parsed.data;
    for (var i = 0; i < data.length; i+=3) {
      var avg = (data[i] + data[i+1] + data[i+2]) / 3;
      data[i] = avg;
      data[i+1] = avg;
      data[i+2] = avg;
    }
    // var newData = [];
    // for (var i = 0; i < data.length; i+=3) {
    //   var b = data[i] ;
    //   var g = data[i+1] * 100;
    //   var r = data[i+2] ;
    //   if(r > 255) {
    //     r = 255;
    //   }
    //
    //   data[i] = b;
    //   data[i+1] = g;
    //   data[i+2] = r;
    //   // newData.unshift(r);
    //   // newData.unshift(g);
    //   // newData.unshift(b);
    // }
    // console.log(newData);
    parsed.data = data;
    // fs.writeFileSync('parsed.txt', parsed);
    // console.log(parsed);
    // for (var i = 0; i < parsed.data.length; i ++) {
    //   parsed.data[i] = 255-parsed.data[i];
    // }
    // console.log(parsed);
    var string = JSON.stringify(parsed);
    // console.log(string);
    var copy = JSON.parse(string, function(key, value) {
      return value && value.type === 'Buffer'
        ? new Buffer(value.data)
        : value;
    });
    // console.log(copy);
    // var newImageBuffer = new Buffer(string);
    var transformedBuffer = Buffer.concat([buffer.slice(0,54), copy]);
    // console.log(transformedBuffer);
    // console.log(transformedBuffer);
    // console.log(json);
    // var restring = base64.fromByteArray(json);
    // console.log(restring);
    // var image = atob(restring);
    // var buffer = new Buffer(restring, 'base64');
    // console.log(buffer);
    fs.writeFileSync('newImage.bmp', transformedBuffer);

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
// transformed.convertBuffer();
// transformed.invertColors();
// transformed.writeFile();
// console.log(transformed.json);

module.exports = Transformer;
