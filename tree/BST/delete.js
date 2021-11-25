const { BinarySearchTree: Parent } = require("./insert");

class BinarySearchTree extends Parent {
  constructor() {
    super();
  }

  _findMax(node) {
    let curr = node;
    while (curr.right) curr = curr.right;
    return curr;
  }

  delete(node, value) {
    if (node === null) return undefined;

    if (node.value > value) {
      node.left = this.delete(node.left, value);
      return node;
    } else if (node.value < value) {
      node.right = this.delete(node.right, value);
      return node;
    } else {
      //  found element
      if (node.left && node.right) {
        //  replace predecessor to curr node
        let temp = this._findMax(node.left);
        node.value = temp.value;
        node.left = this.delete(node.left, node.value);
      } else if (!node.left && !node.right) {
        //  leaf node
        node = null;
      } else {
        //  one child
        if (node.left === null) node = node.right;
        if (node.right === null) node = node.left;
      }

      return node;
    }
  }
}

//      4
//   2      8
//        5    10
//          7
//        6

let bst = new BinarySearchTree();
bst.insert(4);
bst.insert(2);
bst.insert(8);
bst.insert(5);
bst.insert(10);
bst.insert(7);
bst.insert(6);

bst.delete(bst.root, 8);
console.log("--level 0--", bst);
console.log("--level 1--", bst.root.right);
console.log("--level 2--", bst.root.right.left);
console.log("--level 3--", bst.root.right?.left?.right);
