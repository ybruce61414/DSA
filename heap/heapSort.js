class MaxBinaryHeap {
  constructor() {
    this.values = [];
    this.size = 0;
  }

  insert(val) {
    if (val === undefined) return;
    this.values.push(val);
    this.size += 1;

    this._bubbleUp();
    return this.values;
  }

  extractMax() {
    if (this.values.length === 0) return;
    this._swap(0, this.values.length - 1);

    let max = this.values.pop();
    this.size -= 1;

    this._trickleDown();
    return max;
  }

  heapify(arr) {
    if (!Array.isArray(arr)) return;
    //  need copy new one otherwise change original array
    let copyArr = Array.from(arr);
    let lastParentIndex = Math.floor((copyArr.length - 2) / 2);
    this.values = copyArr;
    this.size = copyArr.length;

    for (let i = lastParentIndex; i >= 0; i--) {
      this._trickleDown(i);
    }
    return this.values;
  }

  _bubbleUp() {
    let currIdx = this.values.length - 1;
    let parentIx;

    while (currIdx > 0) {
      parentIx = Math.floor((currIdx - 1) / 2);
      if (this.values[parentIx] >= this.values[currIdx]) break;
      this._swap(currIdx, parentIx);
      currIdx = parentIx;
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
        leftChildIdx < this.size &&
        this.values[leftChildIdx] > this.values[currIdx]
      ) {
        swapIdx = leftChildIdx;
      }
      if (
        rightChildIdx < this.size &&
        ((swapIdx && this.values[rightChildIdx] > this.values[leftChildIdx]) ||
          (!swapIdx && this.values[rightChildIdx] > this.values[currIdx]))
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

const heapSort = (arr) => {
  let sorted = [];
  const maxHeap = new MaxBinaryHeap();

  for (let i = 0; i < arr.length; i++) {
    maxHeap.insert(arr[i]);
  }

  // maxHeap.heapify(arr);

  for (let i = 0; i < arr.length; i++) {
    let ex = maxHeap.extractMax()
    sorted.push(ex);
  }
  return sorted;
};

let arr1 = [1, 6, 2, 3, 7, 3, 4, 6, 9];
arr1 = heapSort(arr1);
console.log(arr1);
