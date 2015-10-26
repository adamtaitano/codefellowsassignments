// var exports = module.exports = {}; // use at the bottom instead
var greet = function(name){
  return 'Hello, ' + name; // use return instead of console.log for tests
};

console.log(process.argv);
//This is an attempt at the first bonus point:
if(process.argv.length === 3) {
var param = process.argv[2];
console.log(greet(param));
}
if(process.argv.length === 5) {
var param = process.argv[4];
console.log(greet(param));
}


module.exports.greet = greet;
module.exports.param = param;
