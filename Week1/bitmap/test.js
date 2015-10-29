var expect = require('chai').expect;
var Transformer = require('./transformer.js');

describe('Open bitmap file', function() {
  it('the new transformer instance should have openFile method', function(done) {
    var transformer = new Transformer('bitmaps/11.bmp');
    expect(transformer.openFile).to.be.a('function');
    done();
  });
  it('transformer.openFile should return a buffer', function(done) {
    var transformer = new Transformer('bitmaps/11.bmp');
    var buffer = transformer.openFile();
    expect(buffer).to.be.ok;
    done();
  });
});

describe('Convert buffer to JSON', function() {
  it('should contain a convertBuffer method', function(done) {
    var transformer = new Transformer('bitmaps/11.bmp');
    expect(transformer.convertBuffer).to.be.a('function');
    done();
  });
  it('should convert buffer into an object', function(done) {
    var transformer = new Transformer('bitmaps/11.bmp');
    transformer.openFile();
    var object = transformer.convertBuffer();
    expect(object).to.be.an('object');
    done();
  });
});

describe('Transforms', function() {
  it('should manipulate the object', function(done){
    expect().to.be.an('object');
  });
});
