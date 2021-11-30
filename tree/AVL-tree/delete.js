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
    const deleteHelper = (currNode, value) => {
      if (currNode === null) return undefined;

      if (currNode.value > value) {
        currNode.left = deleteHelper(currNode.left, value);
      } else if (currNode.value < value) {
        currNode.right = deleteHelper(currNode.right, value);
      } else {
        if (currNode.left && currNode.right) {
          //  replace predecessor to curr node
          let temp = this._findMax(currNode.left);
          currNode.value = temp.value;
          currNode.left = deleteHelper(currNode.left, currNode.value);
        } else if (!currNode.left && !currNode.right) {
          //  leaf node
          currNode = null;
        } else {
          //  one child
          if (!currNode.left) currNode = currNode.right;
          if (!currNode.right) currNode = currNode.left;
        }
      }
      return this.balance(currNode);
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
