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

  balanceFactor(node) {
    return this.height(node.left) - this.height(node.right);
  }

  rightRotation(node) {
    const temp = node.left;
    node.left = temp.right;
    temp.right = node;
    return temp;
  }

  leftRotation(node) {
    const temp = node.right;
    node.right = temp.left;
    temp.left = node;
    return temp;
  }

  LR(node) {
    node.left = this.leftRotation(node.left);
    node = this.rightRotation(node);
    return node;
  }

  RL(node) {
    node.right = this.rightRotation(node.right);
    node = this.leftRotation(node);
    return node;
  }

  balance(node) {
    if (!node) return node;
    const nodeBF = this.balanceFactor(node);

    if (nodeBF > 1) {
      if (this.balanceFactor(node.left) < 0) {
        node.left = this.leftRotation(node.left);
      }
      node = this.rightRotation(node);
    } else if (nodeBF < -1) {
      if (this.balanceFactor(node.right) > 0) {
        node.right = this.rightRotation(node.right);
      }
      node = this.leftRotation(node);
    }
    return node;
  }

  insert(value) {
    const insertHelper = (node, parent, value) => {
      if (!node) {
        node = new Node(value);
        if (!parent) this.root = node;
      } else if (value < node.value) {
        node.left = insertHelper(node.left, node, value);
      } else if (value > node.value) {
        node.right = insertHelper(node.right, node, value);
      }
      return this.balance(node);
    };

    this.root = insertHelper(this.root, null, value);
  }
}

module.exports = { AVLTree };

// let bst = new AVLTree();
//
// bst.insert(50);
// bst.insert(20);
// bst.insert(15);
// bst.insert(40);
//
// console.log(bst.root);
