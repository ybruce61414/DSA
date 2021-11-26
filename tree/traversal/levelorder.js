const { BinarySearchTree: Parent } = require("../BST/insert");

class BinarySearchTree extends Parent {
  constructor() {
    super();
  }

  levelOrder() {
    let queue = [];
    let data = [];
    let dequeueEle;
    queue.unshift(this.root);

    while (queue.length > 0) {
      dequeueEle = queue.pop();
      data.push(dequeueEle.value);

      if (dequeueEle.left) queue.unshift(dequeueEle.left);
      if (dequeueEle.right) queue.unshift(dequeueEle.right);
    }

    return data;
  }
}

//      10
//   6      15
//  3 8       20

// [ 10,6,15,3,8,20 ]

let bst = new BinarySearchTree();
bst.insert(10);
bst.insert(6);
bst.insert(15);
bst.insert(3);
bst.insert(8);
bst.insert(20);

console.log(bst.levelOrder());
