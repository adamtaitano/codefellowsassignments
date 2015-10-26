var expect = require('chai').expect;
var greet = require('./greet.js');

describe('Greet module', function() {
  it('should return a greeting', function(done) {
    expect(greet.greet('Adam')).to.equal('Hello, Adam');
    done();
  });
  it('should be a function', function(done){
    expect(greet.greet).to.be.a('function');
    done();
  });
});

//This is an attempt at the second bonus point:
describe('Command line parameter', function() {
  it('the parameter should be undefined - no argument given when test is completed', function(done) {
    expect(greet.param).to.equal(undefined);
    done();
  });
  it('the parameter should be falsy', function(done) {
    expect(greet.param).to.not.be.ok;
    done();
  });
});
