var expect = require('chai').expect;
var Queue = require('./queueConstructor.js');

describe('Queue', function() {
  it('data should be an empty array on instance creation', function(done) {
    var queue = new Queue();
    expect(queue.data.length).to.equal(0);
    expect(queue.hasNext()).to.be.not.ok;
    done();
  });
  it('should enqueue an item', function(done) {
    var queue = new Queue();
    queue.enqueue(5);
    expect(queue.data).to.not.be.empty;
    done();
  });
  it('should dequeue an item', function(done) {
    var queue = new Queue();
    queue.enqueue(5);
    queue.dequeue();
    expect(queue.data).to.be.empty;
    done();
  });
  it('should say if there is a next item in queue', function(done) {
    var queue = new Queue();
    queue.enqueue(5);
    expect(queue.hasNext()).to.be.ok;
    done();
  });
});
