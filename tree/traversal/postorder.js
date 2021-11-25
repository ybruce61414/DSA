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
    const stack = [];
    const data = [];
    let curr = this.root;

    while (curr || stack.length > 0) {
      if (curr) {
        stack.push(curr.value);
        curr = curr.left;
      } else {
        const popEle = stack.pop();
        data.push(popEle.value);
      }
    }
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
// console.log(bst.postorderIter());
