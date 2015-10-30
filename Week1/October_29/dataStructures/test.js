var expect = require('chai').expect;
var Implement = require('./index.js');

describe('Implement methods', function() {
  it('should have a working push method', function(done) {
    var implement = new Implement();
    var array = [1,2];
    implement.push(array,3);
    expect(array).to.deep.equal([1,2,3]);
    expect(implement.push(array,4)).to.equal(4);
    done();
  });

  it('should have a working pop method', function(done) {
    var implement = new Implement();
    expect(implement.pop([1,2,3])).to.deep.equal(3);
    var array = [1,2,3];
    implement.pop(array);
    expect(array).to.deep.equal([1,2]);
    expect(implement.pop(array)).to.equal(2);
    done();
  });

  it('should have a working shift method', function(done) {
    var implement = new Implement();
    var array = [1,2,3];
    implement.shift(array);
    expect(implement.shift([1,2,3])).to.equal(1);
    expect(array).to.deep.equal([2,3]);
    done();
  });

  it('should have a working unshift method', function(done) {
    var implement = new Implement();
    var array = [1,2,3];
    implement.unshift(array, 4);
    expect(array).to.deep.equal([4,1,2,3]);
    expect(implement.unshift(array,5)).to.equal(5);
    done();
  });
});

//Tests written with Jeff
describe('Unique method', function() {
  it('should pass multiple cases', function () {
      var implement = new Implement();
      var arr = [1, 2, 2, 1, 3, 2, 3, 4, 4];
      var arr2 = [1];
      var arr3 = [];
      var arr4 = [true, false, 0, 5, 0, false, true];
      var arr5 = [true, 'b', 5, -1, 'b', 'a'];
      var arr6 = [true];
      var arr7 = [false];
      var arr8 = [1, 2, 3, 4];
      expect(implement.unique(arr)).to.deep.equal([1, 2, 3, 4]);
      expect(implement.unique(arr2)).to.deep.equal([1]);
      expect(implement.unique(arr3)).to.deep.equal([]);
      expect(implement.unique(arr4)).to.deep.equal([true, false, 0, 5]);
      expect(implement.unique(arr5)).to.deep.equal([true, 'b', 5, -1, 'a']);
      expect(implement.unique(arr6)).to.deep.equal([true]);
      expect(implement.unique(arr7)).to.deep.equal([false]);
      expect(implement.unique(arr8)).to.deep.equal([1, 2, 3, 4]);
    });
});

describe('Frequency method', function(){
  it('should pass multiple cases', function(){
    var implement = new Implement();
    var arr = ['the','red','fox', 'eats'];
    var arr1 = ['the','red','fox','jumped','over','the','lazy','brown','dog'];
    var arr2 = [];
    var arr3 = ['aaaaa','bbb'];
    var arr4 = ['aaaa','bbbb'];
    expect(implement.frequency(arr)).to.deep.equal([{'e': 3}]);
    expect(implement.frequency(arr1)).to.deep.equal([{'e': 5}]);
    expect(implement.frequency(arr2)).to.not.be.ok;
    expect(implement.frequency(arr3)).to.deep.equal([{'a': 5}]);
    expect(implement.frequency(arr4)).to.deep.equal([{'a': 4}, {'b' :4}]);
  });
});
