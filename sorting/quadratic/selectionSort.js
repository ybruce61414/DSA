function selectionSort(arr) {
  const swap = (idx1, idx2) => {
    [arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]];
  };

  for (let i = 0; i < arr.length - 1; i++) {
    let minIdx = i;
    for (let j = 1; j < arr.length - i; j++) {
      if (arr[minIdx] > arr[i + j]) {
        minIdx = i + j;
      }
    }
    swap(i, minIdx);
  }
  return arr;
}
// big(o) = (n-1) + (n-2) + (n-3) + ... + 1 = n*(n+1)/2

console.log(selectionSort([34, 22, 10, 19, 17]));
console.log(selectionSort([41, 39, 33, 18, 27, 12, 55]));
