const { BinarySearchTree: Parent } = require("../BST/insert");

class BinarySearchTree extends Parent {
  constructor() {
    super();
  }

  preorderRecur() {
    const data = [];

    const traversal = (node) => {
      data.push(node.value);
      if (node.left) traversal(node.left);
      if (node.right) traversal(node.right);
    };
    traversal(this.root);
    return data;
  }

  preorderIter() {
    const stack = [];
    const data = [];

    stack.push(this.root);

    while (stack.length > 0) {
      let curr = stack.pop();

      data.push(curr.value);
      if (curr.right) stack.push(curr.right);
      if (curr.left) stack.push(curr.left);
    }
    return data;
  }
}

//      10
//   6      15
//  3 8       20

// [ 10, 6, 3, 8, 15, 20 ]

let bst = new BinarySearchTree();
bst.insert(10);
bst.insert(6);
bst.insert(15);
bst.insert(3);
bst.insert(8);
bst.insert(20);

console.log(bst.preorderRecur());
console.log(bst.preorderIter());
