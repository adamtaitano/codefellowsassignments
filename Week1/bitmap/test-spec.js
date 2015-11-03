var expect = require('chai').expect;
var Transformed = require('./index.js');

describe('Open bitmap file', function() {
  it('the new transformed instance should have an openFile method', function(done) {
    var instance = new Transformed();
    expect(instance.openFile).to.be.a('function');
    done();
  });
  it('instance.openFile should return a buffer', function(done) {
    var instance = new Transformed();
    var buffer = instance.openFile('bitmaps/crayons.bmp');
    expect(buffer).to.be.ok;
    done();
  });
  it('should save the buffer in the instance', function(done) {
    var instance = new Transformed();
    var buffer = instance.openFile('bitmaps/crayons.bmp');
    expect(instance.buffer).to.be.ok;
    done();
  });
});

describe('Convert buffer to JSON', function() {
  it('should return the parsed buffer', function(done) {
    var instance = new Transformed();
    var buffer = instance.openFile('bitmaps/crayons.bmp');
    expect(instance.bufferToJSON(buffer)).to.be.ok;
    done();
  });
  it('should save the parsed buffer as "parsed"', function(done) {
    var instance = new Transformed();
    var buffer = instance.openFile('bitmaps/crayons.bmp');
    instance.bufferToJSON(buffer);
    expect(instance.parsed).to.be.ok;
    done();
  });
});

describe('Transform - invertColors', function() {
  it('should manipulate the object data', function(done){
    var instance = new Transformed();
    var buffer = instance.openFile('bitmaps/crayons.bmp');
    var parsed = instance.bufferToJSON(buffer);
    expect(instance.invertColors(parsed)).to.be.an('object');
    expect(instance.invertColors(parsed)).to.be.ok;
    done();
  });
  it('should save the transformed data', function(done) {
    var instance = new Transformed();
    var buffer = instance.openFile('bitmaps/crayons.bmp');
    var parsed = instance.bufferToJSON(buffer);
    instance.invertColors(parsed);
    expect(instance.transformedData).to.be.an('object');
    expect(instance.transformedData).to.be.ok;
    done();
  });
});

describe('Transform - rgb', function() {
  it('should transform the picture according to the settings', function(done) {
    var instance = new Transformed();
    var buffer = instance.openFile('bitmaps/crayons.bmp');
    var parsed = instance.bufferToJSON(buffer);
    var transformedData = instance.rbg('green', 2, parsed);
    expect(instance.transformedData).to.be.an('object');
    var transformedBuffer = instance.jsonToBuffer(transformedData);
    instance.writeFile(transformedBuffer);
    done();
  });
});

describe('Transform - grayscale', function() {
  it('should transform the picture according to the settings', function(done) {
    var instance = new Transformed();
    var buffer = instance.openFile('bitmaps/crayons.bmp');
    var parsed = instance.bufferToJSON(buffer);
    var transformedData = instance.rbg('green', 2, parsed);
    expect(instance.transformedData).to.be.an('object');
    var transformedBuffer = instance.jsonToBuffer(transformedData);
    instance.writeFile(transformedBuffer);
    done();
  });
});

describe('JSON to buffer', function() {
    it('should return a buffer', function(done) {
      var instance = new Transformed();
      var buffer = instance.openFile('bitmaps/crayons.bmp');
      var parsed = instance.bufferToJSON(buffer);
      var transformedData = instance.invertColors(parsed);
      expect(instance.jsonToBuffer(transformedData)).to.be.ok;
      done();
    });
});

describe('Write file', function() {
  it('should write a file to disk', function(done) {
    var instance = new Transformed();
    var buffer = instance.openFile('bitmaps/crayons.bmp');
    var parsed = instance.bufferToJSON(buffer);
    var transformedData = instance.invertColors(parsed);
    var transformedBuffer = instance.jsonToBuffer(transformedData);
    instance.writeFile(transformedBuffer);
    expect('newImage.bmp').to.be.ok;
    done();
  });
});
