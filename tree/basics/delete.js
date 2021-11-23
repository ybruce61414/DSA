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

  _findMax(node) {
    let curr = node;

    while (curr.right) curr = curr.right;
    return curr;
  }

  delete(node, value) {
    if (node === null) return undefined;

    if (node.value > value) {
      console.log("> value------", node, value);

      node.left = this.delete(node.left, value);
    } else if (node.value < value) {
      console.log("< value-------", node, value);
      node.right = this.delete(node.right, value);
      console.log("<secret -------", node);
    } else {
      //  found element
      if (node.left && node.right) {
        //  replace predecessor to curr node
        let temp = this._findMax(node.left);
        node.value = temp.value;
        console.log("found 2 child--", node);
        node.left = this.delete(node.left, node.value);

        console.log("after found 2 child--", node);
      } else {
        //  one child or leaf node
        console.log("found one or no!!", node);
        if (node.left === null) node = node.right;
        if (node.right === null) node = node.left;
      }
      console.log("return  !!", node);
      return node;
    }
  }
}

//      4
//   2      8
//        5    10
//          7
//        6

let bst = new BinarySearchTree();
bst.insert(4);
bst.insert(2);
bst.insert(8);
bst.insert(5);
bst.insert(10);
bst.insert(7);
bst.insert(6);

bst.delete(bst.root, 8);
console.log("---0", bst);
console.log("---1", bst.root.right);
console.log("---2", bst.root.right.left);
console.log("---3", bst.root.right?.left?.right);
