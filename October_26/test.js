var expect = require('chai').expect;
var string = "some string";
var greet = require('./greet.js');

describe('Access String', function() {
  it('should return a string', function(done){
    expect(string).to.be.a('string');
    done();
  });
  it('should equal "some string"', function(done){
    expect(string).to.equal('some string');
    done();
  });
});

describe('Greet module', function() {
  it('should return a greeting', function(done) {
    expect(greet.sayName('Adam')).to.equal('Hello, my name is Adam');
    done();
  });
  it('should contain a method sayName', function(done){
    expect(greet).to.have.ownProperty('sayName');
    done();
  });
});
