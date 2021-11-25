const { BinarySearchTree: Parent } = require("../BST/insert");

class BinarySearchTree extends Parent {
  constructor() {
    super();
  }

  inorderRecur() {
    const data = [];

    const traversal = (node) => {
      if (node.left) traversal(node.left);
      data.push(node.value);
      if (node.right) traversal(node.right);
    };
    traversal(this.root);
    return data;
  }

  inorderIter() {
    const stack = [];
    const data = [];
    let curr = this.root;

    while (curr || stack.length > 0) {
      if (curr) {
        stack.push(curr);
        curr = curr.left;
      } else {
        const popEle = stack.pop();
        data.push(popEle.value);
        curr = popEle.right;
      }
    }
    return data;
  }
}

//      10
//   6      15
//  3 8       20

// [ 3,6,8,10,15,20 ]

let bst = new BinarySearchTree();
bst.insert(10);
bst.insert(6);
bst.insert(15);
bst.insert(3);
bst.insert(8);
bst.insert(20);

console.log(bst.inorderRecur());
console.log(bst.inorderIter());
