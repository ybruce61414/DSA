function insertionSort(arr) {
  for (let i = 0; i < arr.length; i++) {
    let curr = arr[i];
    let j = i - 1;

    while (j >= 0 && arr[j] > curr) {
      arr[j + 1] = arr[j];
      j -= 1;
    }
    arr[j + 1] = curr;
  }
  return arr;
}

//  version 2
// function insertionSort(arr) {
//   for (let i = 0; i < arr.length; i++) {
//     let curr = arr[i];
//     let track = null;
//
//     for (let j = i - 1; j >= 0; j--) {
//       if (curr >= arr[j]) break;
//       arr[j + 1] = arr[j];
//       track = j;
//     }
//
//     if (track !== null) arr[track] = curr;
//   }
//   return arr;
// }

console.log(insertionSort([34, 22, 10, 19, 17]));
