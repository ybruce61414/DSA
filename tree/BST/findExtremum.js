const { BinarySearchTree: Parent } = require("./insert");

class BinarySearchTree extends Parent {
  constructor() {
    super();
  }

  findMin(node) {
    let curr = node;

    while (curr.left) curr = curr.left;
    return curr;
  }

  findMax(node) {
    let curr = node;

    while (curr.right) curr = curr.right;
    return curr;
  }
}

//      10
//   5      13
//  2 7   11  16

let bst = new BinarySearchTree();
bst.insert(10);
bst.insert(5);
bst.insert(13);
bst.insert(11);
bst.insert(2);
bst.insert(16);
bst.insert(7);

console.log("---max", bst.findMax(bst.root));
console.log("---min", bst.findMin(bst.root.right));
