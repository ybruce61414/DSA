const { BinarySearchTree: Parent } = require("../BST/insert");

class BinarySearchTree extends Parent {
  constructor() {
    super();
  }

  postorderRecur() {
    const data = [];

    const traversal = (node) => {
      if (node.left) traversal(node.left);
      if (node.right) traversal(node.right);
      data.push(node.value);
    };
    traversal(this.root);
    return data;
  }

  postorderIter() {
    //  using one stack
    const stack = [this.root];
    const data = [];

    while (stack.length > 0) {
      let top = stack[stack.length - 1];
      if (!top.left && !top.right) {
        data.push(stack.pop().value);
      }

      if (top.right) {
        stack.push(top.right);
        top.right = null;
      }

      if (top.left) {
        stack.push(top.left);
        top.left = null;
      }
    }
    return data;
  }
}

//      10
//   6      15
//  3 8       20

// [ 3,8,6,20,15,10 ]

let bst = new BinarySearchTree();
bst.insert(10);
bst.insert(6);
bst.insert(15);
bst.insert(3);
bst.insert(8);
bst.insert(20);

console.log(bst.postorderRecur());
console.log(bst.postorderIter());
