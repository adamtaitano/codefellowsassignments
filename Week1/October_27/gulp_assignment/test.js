var expect = require('chai').expect;
var exports = require('./greet.js');




describe('Greet module', function() {
  'use strict';
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
//Command to run test is: mocha test.js --globals 'Adam'
describe('Command line parameter', function() {
  'use strict';
  it('the command line should return "Hello, Adam"', function(done) {
    expect(exports.greet(exports.param)).to.equal('Hello, Adam');
    done();
  });
  it('the command line response should be a string', function(done) {
    expect(exports.greet(exports.param)).to.be.a('string');
    done();
  });
});
