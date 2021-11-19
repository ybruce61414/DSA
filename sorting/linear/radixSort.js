const { findMax, countingSort } = require("./countingSort");

function radixSort(arr) {
  let max = findMax(arr);
  return max;
}

console.log(radixSort([181, 289, 390]));
