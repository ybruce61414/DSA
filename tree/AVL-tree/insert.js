const Node = require("./node");

class AVLTree {
  constructor() {
    this.root = null;
  }

  height(node) {
    // base case
    if (node === null) return 0;

    return Math.max(this.height(node.left), this.height(node.right)) + 1;
  }

  insert(value) {
    this.insertHelper(this.root, null, value);
  }

  singleRotateLeft(node) {}

  singleRotateLeft(node) {}

  LR(node) {}

  RL(node) {}

  singleRotateRight() {}

  insertHelper(node, nodeParent, value) {
    if (node === null) {
      node = new Node(value);
      node.left = node.right = null;
    } else if (value < node.value) {
      node.left = this.insertHelper(node.left, node, value);
      if (this.height(node.left) - this.height(node.right) > 1) {
        if (value < node.left.value) {
          node = this.singleRotateRight(node);
        } else {
          node = this.LR(node);
        }
      }
    } else if (value > node.value) {
      //  to-do
    }
    return node;
  }
}
