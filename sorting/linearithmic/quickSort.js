function swap(arr, idx1, idx2) {
  [arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]];
}

function partitionPivotEnd(arr, start, end) {
  // Taking the last element as the pivot
  const pivotValue = arr[end];
  let pivotIndex = start;
  for (let i = start; i < end; i++) {
    if (arr[i] < pivotValue) {
      swap(arr, i, pivotIndex);
      pivotIndex++;
    }
  }

  swap(arr, pivotIndex, end);
  return pivotIndex;
}

function partitionPivotStart(arr, start, end) {
  let pivot = arr[start];
  let swapIndex = start;

  for (let i = start; i <= end; i++) {
    if (arr[i] < pivot) {
      swapIndex += 1;
      swap(arr, i, swapIndex);
    }
  }
  swap(arr, start, swapIndex);

  return swapIndex;
}

function quickSortRecur1(arr, start, end) {
  // Base case or terminating case
  if (start < end) {
    let index = partitionPivotStart(arr, start, end);

    quickSortRecur1(arr, start, index - 1);
    quickSortRecur1(arr, index + 1, end);
  }

  return arr;
}

function quickSortRecur2(arr, left, right) {
  left = left || 0;
  right = right || arr.length - 1;

  if (right > left) {
    let pivot = partitionPivotStart(arr, left, right);

    quickSortRecur2(arr, left, pivot - 1);
    quickSortRecur2(arr, pivot + 1, right);
  }

  return arr;
}

function quickSortExtraSpace(Arr) {
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

  return [
    ...quickSortExtraSpace(leftArr),
    pivot,
    ...quickSortExtraSpace(rightArr),
  ];
}

const array1 = [7, -2, 4, 1, 6, 5, 0, -4, 2];
const array2 = [7, -2, 4, 1, 6, 5, 0, -4, 2];
const array3 = [7, -2, 4, 1, 6, 5, 0, -4, 2];
const array4 = [11, 40, 40, 50, 43, 10, 30, 42, 20, 6, 19, 32, 20, 41, 23, 27];

console.log(quickSortRecur1(array4, 0, array4.length - 1));
console.log(quickSortExtraSpace(array4));
