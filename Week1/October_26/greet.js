// var exports = module.exports = {}; // use at the bottom instead
var greet = function(name){
  return 'Hello, ' + name; // use return instead of console.log for tests
};


//This is an attempt at the first bonus point:
var param = process.argv[2];
console.log(greet(param));

module.exports.greet = greet;
module.exports.greet.param = param;
