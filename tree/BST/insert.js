class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class BinarySearchTree {
  constructor() {
    this.root = null;
  }

  insert(value) {
    let newNode = new Node(value);
    if (!this.root) {
      this.root = newNode;
      return this;
    }

    let curr = this.root;
    while (true) {
      if (value < curr.value) {
        if (curr.left === null) {
          curr.left = newNode;
          return this;
        }
        curr = curr.left;
      } else if (value > curr.value) {
        if (curr.right === null) {
          curr.right = newNode;
          return this;
        }
        curr = curr.right;
      } else return undefined;
    }
  }
}

//      10
//   5      13
//  2 7   11  16

module.exports = { BinarySearchTree };

// let bst = new BinarySearchTree();
// bst.insert(10);
// bst.insert(5);
// bst.insert(13);
// bst.insert(11);
// bst.insert(2);
// bst.insert(16);
// bst.insert(7);
