var fs = require( 'fs' );
var assert = require( 'chai' ).assert;
var path = require( 'path' );

// * callbacks - return the contents of a directory with:
// 	* file name, file or dir, last updated, created
// 	* What methods? fs.readdir  fs.stat

function getFileList( directory, cb ){
  console.log('starting getFileList');
  return new Promise(function(resolve, reject) {
    console.log('inside promise');
    // reject('no play for u');
    var promise = new Promise( function(resolve, reject){
      fs.readdir('./test/testDir', function(err, files){
        if (err) {return reject(err); }
        resolve( files );
      });
    });
    resolve(promise);
  })
  // .then(
  //   function(result) {
  //
  //   });
  console.log('ending getFileList');
}

describe( 'callbacks', function(){
  it('return a promise', function(done) {
    var promise = getFileList();
    console.log('called getFileList');
    promise.then(
      function(result){
      console.log('promise then', result);
      done();
    },
      function(error) {
      console.log('promise error', error);
      done();
    });
  });
});
