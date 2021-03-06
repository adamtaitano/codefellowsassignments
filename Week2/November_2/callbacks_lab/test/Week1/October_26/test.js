var expect = require('chai').expect;
var exports = require('./greet.js');
var child_process = require('child_process');

describe('Greet module', function() {
  it('should return a greeting', function(done) {
    expect(exports.greet('Adam')).to.equal('Hello, Adam');
    done();
  });
  it('should be a function', function(done){
    expect(exports.greet).to.be.a('function');
    done();
  });
});

//This is an attempt at the second bonus point:
describe('Command line parameter', function() {
  it('the command line should return "Hello, Adam"', function(done) {
    expect(exports.greet(exports.param)).to.equal('Hello, Adam');
    done();
  });
  it('the command line response should be a string', function(done) {
    expect(exports.greet(exports.param)).to.be.a('string');
    done();
  });
});
