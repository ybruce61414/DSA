const { BinarySearchTree: Parent } = require("./insert");

class BinarySearchTree extends Parent {
  constructor() {
    super();
  }

  getHeight(node) {
    // base case
    if (node === null) return 0;

    return Math.max(this.getHeight(node.left), this.getHeight(node.right)) + 1;
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

console.log("height", bst.getHeight(bst.root));
