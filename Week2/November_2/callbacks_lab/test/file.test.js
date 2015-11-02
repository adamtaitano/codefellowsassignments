var expect = require('chai').expect;
var assert = require('chai').assert;
var fs = require('fs');
var path = require('path');

function getFileList(directory, callback) {
  fs.readdir(directory, function(error, data){
    if (error) callback(error);
    // console.log('this is data ', data);
    var fileStats = [];
    data.forEach(function(file){
      // console.log('element is ', element);
      fs.stat(path.join(directory, file), function(err, stats){
        var fileInfo = {};
        if(stats.isFile()){
          fileInfo.type = 'file';
        }
        if(stats.isDirectory()){
          fileInfo.type = 'dir';
        }
        fileInfo.createdAt = stats.birthtime;
        fileInfo.lastUpdated = stats.mtime;
        fileInfo.name = file;
        // console.log('object stats ',stats);
        // console.log(stats.isFile());
        // fileStats.push(fileInfo);
      });
      if ( fileStats.push( fileInfo ) === data.length ) {
        callback( null, fileStats );
      }
    });
    // callback(null, fileStats);
  });
}
describe('Callbacks', function(){
  describe('#getFileList', function(){
    var returnedFiles;
    before(function(banana){
      getFileList('./test', function(error, files){
        if (error) throw error;
        returnedFiles = files;
        banana();
      });
    });
    it('should return an array of many file info objects', function(banana) {
      console.log(returnedFiles)
      expect(Array.isArray(returnedFiles)).to.be.ok;
      expect(returnedFiles.length).to.not.eql(0);
      banana();
    });
    it('should have info for each file', function(banana){
      returnedFiles.forEach(function(file){
        expect(file).to.be.an('object');
        expect(Array.isArray(file), 'is array').to.not.be.ok;
        expect(file.name).to.be.ok;
        expect(file.type).to.be.ok;
        expect(file.lastUpdated).to.be.ok;
        expect(file.createdAt).to.be.ok;
      });
    banana();
    });
    it('should send an error when given bad path', function(potato) {
      getFileList('./badPath', function(error, files) {
        expect(error.code).to.equal('ENOENT');
        expect(error).to.be.ok;
        expect(files).to.not.be.ok;
        potato();
      });
    });
    it('should have the same members', function() {
      assert.sameMembers(returnedFiles.map( file => file.name ), ['.DS_Store','Week1','async_example','file.test.js']);
    });
  });
});
