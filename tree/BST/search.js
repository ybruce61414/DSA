const { BinarySearchTree: Parent } = require("./insert");

class BinarySearchTree extends Parent {
  constructor() {
    super();
  }

  search(value) {
    let curr = this.root;

    while (curr) {
      if (value < curr.value) {
        curr = curr.left;
      } else if (value > curr.value) {
        curr = curr.right;
      } else {
        return curr;
      }
    }
    return undefined;
  }
}

//      10
//   5      13
//  2 7   11  16

let bst = new BinarySearchTree();
bst.insert(10);
bst.insert(5);
bst.insert(13);
bst.insert(11);
bst.insert(2);
bst.insert(16);
bst.insert(7);

console.log(bst.root);
console.log(bst.root.left);
console.log(bst.root.right);
console.log(bst.search(16));
