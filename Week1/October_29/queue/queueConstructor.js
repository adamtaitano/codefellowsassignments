function Queue() {
  this.data = [];
  this.enqueue = function(item) {
    this.data.unshift(item);
  };
  this.dequeue = function() {
    this.data.pop();
  };
  this.hasNext = function() {
    return this.data;
  };
}

// Queue.prototype.enqueue = function(item) {
//   this.data.unshift(item);
// };
module.exports = Queue;
