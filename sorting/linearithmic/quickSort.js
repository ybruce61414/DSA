function swap(arr, idx1, idx2) {
  [arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]];
}

function partition(arr, start, end) {
  // Taking the last element as the pivot
  const pivotValue = arr[end];
  let pivotIndex = start;
  for (let i = start; i < end; i++) {
    if (arr[i] < pivotValue) {
      [arr[i], arr[pivotIndex]] = [arr[pivotIndex], arr[i]];
      pivotIndex++;
    }
  }

  // Putting the pivot value in the middle
  [arr[pivotIndex], arr[end]] = [arr[end], arr[pivotIndex]];
  return pivotIndex;
}

function partitionFirst(arr, start, end) {
  let pivot = arr[start];
  let swapIndex = start;

  for (let i = 0; i <= end; i++) {
    if (arr[i] < pivot) {
      swapIndex += 1;
      if (i !== swapIndex) swap(arr, i, swapIndex + 1);
    }
  }
  swap(arr, start, swapIndex);
  return swapIndex;
}

function quickSort1(arr, start, end) {
  // Base case or terminating case
  if (start >= end) {
    return;
  }

  let index = partition(arr, start, end);

  quickSort1(arr, start, index - 1);
  quickSort1(arr, index + 1, end);
}

function quickSort2(Arr) {
  if (Arr.length <= 1) {
    return Arr;
  }

  const pivot = Arr[Arr.length - 1];
  const leftArr = [];
  const rightArr = [];

  for (let i = 0; i < Arr.length - 1; i++) {
    if (Arr[i] < pivot) {
      leftArr.push(Arr[i]);
    } else {
      rightArr.push(Arr[i]);
    }
  }

  return [...quickSort2(leftArr), pivot, ...quickSort2(rightArr)];
}

function quickSort3(array, left, right) {
  left = left || 0;
  right = right || array.length - 1;

  let pivot = partition(array, left, right);

  if (left < pivot - 1) {
    quickSort3(array, left, pivot - 1);
  }

  if (right > pivot + 1) {
    quickSort3(array, pivot, right);
  }

  return array;
}

const array1 = [7, -2, 4, 1, 6, 5, 0, -4, 2];
const array2 = [7, -2, 4, 1, 6, 5, 0, -4, 2];
const array3 = [7, -2, 4, 1, 6, 5, 0, -4, 2];
const array4 = [11, 40, 40, 50, 43, 10, 30, 42, 20, 6, 19, 32, 20, 41, 23, 27];

quickSort1(array1, 0, array1.length - 1);
let re2 = quickSort2(array2);

// console.log("1----", array1);
// console.log("2----", re2);
// console.log("3----", quickSort3(array3));

console.log("1----", partitionFirst(array4, 0, array4.length - 1));
