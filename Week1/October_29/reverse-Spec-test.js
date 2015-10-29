var expect = require('chai').expect;


describe('reverse array', function() {
  it('should return an array', function(done) {
    var newArr = [], origArr = [1,6,9,12];

    function reverse(tobeReversed) {
      // First solution using length
      /* var len = tobeReversed.length;
      for (var i = 0; i < len; i++) {
        newArr.push(tobeReversed.pop());
      } */

      //Second solution NOT using length
      var item;
      while (item = tobeReversed.pop() ) {
        newArr.push(item);
      }
      return newArr;
    }

    //if 0 is used in the array
    while( item = tobeReversed.pop(), item != null) {
      newArr.push(item);
    }

    expect(reverse(origArr)).to.deep.equal([12,9,6,1]);
    done();
  });
});
