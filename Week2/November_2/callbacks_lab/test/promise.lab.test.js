var fs = require( 'fs' );
var expect = require( 'chai' ).expect;
var path = require( 'path' );

function readDir( directory ){
  return new Promise(function(resolve, reject){
    resolve('hello');
  });
}

describe('Promises', function(){
  describe('#readDir', function(){

    it('should return an array of many file info objects', function(banana) {
      //var dirListPromise = ;
      readDir('./test').then(function(result){
        expect(Array.isArray(result)).to.be.ok;
        expect(result.length).to.not.eql(0);
        banana();
      }).catch(banana);
    });
  });
});
    // it('should have info for each file', function(banana){
    //   returnedFiles.forEach(function(file){
    //     expect(file).to.be.an('object');
    //     expect(Array.isArray(file), 'is array').to.not.be.ok;
    //     expect(file.name).to.be.ok;
    //     expect(file.type).to.be.ok;
    //     expect(file.lastUpdated).to.be.ok;
    //     expect(file.createdAt).to.be.ok;
    //   });
    // banana();
    // });
    // it('should send an error when given bad path', function(potato) {
    //   getFileList('./badPath', function(error, files) {
    //     expect(error.code).to.equal('ENOENT');
    //     expect(error).to.be.ok;
    //     expect(files).to.not.be.ok;
    //     potato();
    //   });
    // });
    // it('should have the same members', function() {
    //   assert.sameMembers(returnedFiles.map( file => file.name ), ['.DS_Store','Week1','async_example','file.test.js']);
    // });
