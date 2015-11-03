var events = require('events');
var fs = require('fs');

var Transformed = function() {
//Saved buffer:
var buffer;
//Saved parsed off-set buffer and header
var parsed;
var header;
//Saved transformed data;
var transformedData;
//Saved transformedBuffer:
var transformedBuffer;
  this.openFile = function(filePath) {
    console.log('Opening file at filepath: ' + filePath);
    var bitmap = fs.readFileSync(filePath);
    this.buffer = new Buffer(bitmap);
    return this.buffer;
  };
  this.bufferToJSON = function(buffer) {
    console.log('Saving header of buffer, and converting offset to pixel array JSON as "parsed"');
    var le = buffer.readUIntLE(10,4);
    var offsetBuffer = buffer.slice(le);
    var header = buffer.slice(0, le);
    var json = JSON.stringify(offsetBuffer);
    var parsed = JSON.parse(json);
    this.parsed = parsed;
    this.header = header;
    return parsed;
  };
  this.invertColors = function(parsed) {
    for (var i = 0; i < parsed.data.length; i ++) {
      parsed.data[i] = 255-parsed.data[i];
    }
    this.transformedData = parsed;
    return this.transformedData;
  };
  this.grayScale = function(parsed) {
    for (var i = 0; i < parsed.data.length; i+=3) {
      var avg = (parsed.data[i] + parsed.data[i+1] + parsed.data[i+2]) / 3;
      parsed.data[i] = avg;
      parsed.data[i+1] = avg;
      parsed.data[i+2] = avg;
    }
    this.transformed = parsed;
    return this.transformed;
  };
  this.rbg = function(color, intensity, parsed) {
    for (var i = 0; i < parsed.data.length; i+=3) {
      if (color == 'red') {
        var b = parsed.data[i] ;
        var g = parsed.data[i+1];
        var r = parsed.data[i+2] * intensity;
      }
      else if (color == 'green') {
        var b = parsed.data[i] ;
        var g = parsed.data[i+1]* intensity;
        var r = parsed.data[i+2];
      }
      else if (color == 'blue') {
        var b = parsed.data[i]*intensity ;
        var g = parsed.data[i+1];
        var r = parsed.data[i+2];
      }
      if(r > 255) {
        r = 255;
      }
      if (b > 255) {
        b = 255;
      }
      if (g > 255) {
        g = 255;
      }
      parsed.data[i] = b;
      parsed.data[i+1] = g;
      parsed.data[i+2] = r;
    }
    this.transformedData = parsed;
    return this.transformedData;
  };
  this.jsonToBuffer = function(transformedData) {
    var string = JSON.stringify(transformedData);
    var copy = JSON.parse(string, function(key, value) {
      return value && value.type === 'Buffer'
        ? new Buffer(value.data)
        : value;
    });
    this.transformedBuffer = Buffer.concat([this.header.slice(0,54), copy]);
    return this.transformedBuffer;
  };
  this.writeFile = function(transformedBuffer) {
    fs.writeFileSync('newImage.bmp', transformedBuffer);
    return 'newImage.bmp';
  };
};

module.exports = Transformed;
