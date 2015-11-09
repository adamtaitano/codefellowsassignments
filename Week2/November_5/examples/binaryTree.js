import chai from 'chai';

const assert = chai.assert;

class Node {
  constructor(value){
    this.value = value;
    this.left = null;
    this.right = null;
  }
  add( value ) {
    if ( value < this.value) {
      if (!this.left) {
        this.left = new Node (value);
      }
      else {
        this.left.add( value );
      }
    }
    else {
      if (!this.right){
      this.right = new Node (value);
      }
      else {
      this.right.add(value);
    }
  }
}
};

class TreeSorter {
  constructor ( values = []) {
    this.node = new Node ( values [0] );
    values.forEach( (value, i ) =>  {
      if (!i) return;
      this.node.add(value);
    });
  }
  list () {
    const result = [];
    this.node.list
  }
}

describe( 'binary sort tree', () => {

  const node = new Node ('foo');
  it('node stores value', () => {
    assert.equal( node.value, 'foo');
  });

  it ('node creates left and right node on add ', () => {
    node.add('boo');
    assert.equal( node.left.value, 'boo');
    node.add('qux');
    assert.equal(node.right.value, 'qux');
  });

  it ('cascades node into existing nodes', () => {
    node.add('cat');
    assert.equal( node.left.rightvalue, 'cat');
  });
});
