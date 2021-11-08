class Node {
  constructor(val, priority) {
    this.val = val;
    this.priority = priority;
  }
}

class PriorityQueue {
  constructor() {
    this.values = [];
  }

  enquene(val, priority) {
    let newNode = new Node(val, priority);
    this.values.push(newNode);
    this._bubbleUp();

    return this.values;
  }

  dequene() {
    if (this.values.length === 0) return;
    this._swap(0, this.values.length - 1);
    let min = this.values.pop();

    this._trickleDown();
    return min;
  }

  isEmpty() {
    return this.values.length === 0;
  }

  show() {
    console.log(this.values);
  }

  _bubbleUp() {
    let currIdx = this.values.length - 1;
    let parentIdx;

    while (currIdx > 0) {
      parentIdx = Math.floor(currIdx - 1 / 2);
      let curr = this.values[currIdx];
      let parent = this.values[parentIdx];

      if (curr.priority >= parent.priority) break;
      this._swap(parentIdx, currIdx);
      currIdx = parentIdx;
    }
  }

  _trickleDown(start = 0) {
    let currIdx = start;
    let leftChildIdx, rightChildIdx, swapIdx;

    while (true) {
      leftChildIdx = currIdx * 2 + 1;
      rightChildIdx = currIdx * 2 + 2;
      swapIdx = null;

      if (
        leftChildIdx < this.values.length &&
        this.values[leftChildIdx].priority < this.values[currIdx].priority
      ) {
        swapIdx = leftChildIdx;
      }
      if (
        rightChildIdx < this.values.length &&
        ((swapIdx &&
          this.values[rightChildIdx].priority <
            this.values[leftChildIdx].priority) ||
          (!swapIdx &&
            this.values[rightChildIdx].priority <
              this.values[currIdx].priority))
      ) {
        swapIdx = rightChildIdx;
      }

      if (!swapIdx) break;
      this._swap(swapIdx, currIdx);
      currIdx = swapIdx;
    }
  }

  _swap(idx1, idx2) {
    [this.values[idx1], this.values[idx2]] = [
      this.values[idx2],
      this.values[idx1],
    ];
  }
}

let pq = new PriorityQueue();

pq.enquene("common cold1", 5);
pq.enquene("gunshot wound", 1);
pq.enquene("high fever", 4);
pq.enquene("broken arm", 2);
pq.enquene("glass in foot", 3);
pq.enquene("common cold2", 5);

pq.show();

// console.log(pq.dequene());
// console.log(pq.dequene());
// console.log(pq.dequene());
// console.log(pq.dequene());
// console.log(pq.dequene());
// console.log(pq.dequene());
