const { AVLTree: Parent } = require("./insert");

class AVLTree extends Parent {
  constructor() {
    super();
  }

  _findMax(node) {
    let curr = node;
    while (curr.right) curr = curr.right;
    return curr;
  }

  delete(value) {
    const deleteHelper = (node, value) => {
      if (node === null) return undefined;

      if (node.value > value) {
        node.left = deleteHelper(node.left, value);
      } else if (node.value < value) {
        node.right = deleteHelper(node.right, value);
      } else {
        if (node.left && node.right) {
          //  replace predecessor to curr node
          let temp = this._findMax(node.left);
          node.value = temp.value;
          node.left = deleteHelper(node.left, node.value);
        } else if (!node.left && !node.right) {
          //  leaf node
          node = null;
        } else {
          //  one child
          if (!node.left) node = node.right;
          if (!node.right) node = node.left;
        }
      }
      return this.balance(node);
    };
    this.root = deleteHelper(this.root, value);
  }
}

let bst = new AVLTree();

//      20                     40
//    15   40         =>    20    50
//       25   50               25
bst.insert(50);
bst.insert(20);
bst.insert(15);
bst.insert(40);
bst.insert(25);
bst.delete(15);

console.log(bst.root);
