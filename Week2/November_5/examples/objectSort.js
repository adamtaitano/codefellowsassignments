const names = ['l', 'd', 'x', 'r'];

const sort = new Sort ( names );

sort.list() === ['d', 'l', 'r', 'x'];
//
//
// function CreateNode(value) {
//   this.value = value;
//   this.left = null;
//   this.right = null;
// }
//
// function sortArray(array) {
//   this.root = array[0];
//   function CreateNode(value) {
//     this.value = value;
//     this.left = null;
//     this.right = null;
//   }
//   var rootNode = new CreateNode(array[0]);
//   var node = new CreateNode(array[1]);
//   this.compareNodes = function(node1, node2) {
//     if (node1.value === node2.value) {
//       return node1;
//     }
//     else if (node1.value > node2.value) {
//       root.right = node.value;
//     }
//     else {
//       root.left = node.value;
//     }
//   };
//   this.compareNodes(rootNode, node);
//   var node2 = new CreateNode(array[2]);
//   if (rootNode.value === node2.value) {
//     return rootNode.value;
//   }
//   if(root)
//   this.compareNodes(rootNode, node2);
// return rootNode;
// }


// create node for first element in the array
// compare node.value to item in array
  //if item > node.value
    //if node.right = null
      //create newNode
      //set node.right = newNode.value
    //if node.right
      //compare item in array with node.right


  //if item < node.value
    //if node.left = null
      //create newNode
      //set node.left = newNode.value
    //if node.left
      //compare second item in array to node.left


function CreateNode(value) {
  this.value = value;
  this.leftNode = null;
  this.rightNode = null;
}


function compareNodes(root, compare) {
  if (root.value == compare.value) {
    console.log('values are the same');
    return root;
  }
  else if (compare.value > root.value){
    console.log('compare is bigger');
    if (!root.rightNode) {
      root.rightNode = compare;
    }
    else {
      compareNodes(compare, root.rightNode);
    }
  }
  else if (compare.value < root.value) {
    console.log('compare is smaller');
    if (!root.leftNode) {
      root.leftNode = compare;
    }
    else{
      compareNodes(compare, root.leftNode);
    }
  }
}
// read nodes from bottom left
