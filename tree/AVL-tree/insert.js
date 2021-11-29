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
    this.root = this.insertHelper(this.root, null, value);
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

  insertHelper(node, parent, value) {
    if (!node) {
      node = new Node(value);
      if (!parent) this.root = node;
    } else if (value < node.value) {
      node.left = this.insertHelper(node.left, node, value);
      if (this.balanceFactor(node) > 1) {
        if (value < node.left.value) {
          node = this.rightRotation(node);
        } else {
          node = this.LR(node);
        }
      }
    } else if (value > node.value) {
      node.right = this.insertHelper(node.right, node, value);
      if (this.balanceFactor(node) < -1) {
        if (value > node.right.value) {
          node = this.leftRotation(node);
        } else {
          node = this.RL(node);
        }
      }
    }
    return node;
  }
}

let bst = new AVLTree();

bst.insert(50);
bst.insert(20);
bst.insert(15);
bst.insert(40);

console.log(bst.root);
