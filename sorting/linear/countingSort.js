const findMax = (arr) => {
  let max = arr[0];
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > max) max = arr[i];
  }
  return max;
};

function countingSort(arr) {
  let outputArr = [];
  let countArr = new Array(findMax(arr) + 1);
  countArr.fill(0);

  for (let i = 0; i < arr.length; i++) {
    countArr[arr[i]] += 1;
  }

  for (let i = 0; i < countArr.length; i++) {
    if (i - 1 >= 0) countArr[i] = countArr[i - 1] + countArr[i];
  }

  for (let i = arr.length - 1; i > -1; i--) {
    //  need to loop backward to make it stable
    let value = arr[i];
    let index = countArr[value] - 1;
    outputArr[index] = value;
    countArr[value] -= 1;
  }

  return outputArr;
}

//  positive integer
// console.log(countingSort([1, 3, 4, 4, 5, 6, 3, 7, 8]));
// console.log(countingSort([11, 40, 40, 50, 43, 10, 20, 6, 19, 23, 27]));

module.exports = { findMax, countingSort };
