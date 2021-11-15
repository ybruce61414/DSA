function merge2Sorted(arr1, arr2) {
  let sortedArr = [];

  while (arr1.length > 0 && arr2.length > 0) {
    if (arr1[0] < arr2[0]) {
      sortedArr.push(arr1.shift());
    } else {
      sortedArr.push(arr2.shift());
    }
  }
  return [...sortedArr, ...arr1, ...arr2];
}

function mergeSort(arr) {
  //  base case
  if (arr.length < 2) {
    return arr;
  }
  const half = Math.floor(arr.length / 2);
  const leftArr = arr.splice(0, half);

  return merge2Sorted(mergeSort(leftArr), mergeSort(arr));
}

console.log(merge2Sorted([4, 6], [5, 8, 15, 18]));
console.log(mergeSort([8, 5, 15, 6, 18, 4, 7]));
