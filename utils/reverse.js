const reverse = (arr) => {
  let newArr = [];
  for (let i = arr.length - 1; i > -1; i--) {
    newArr.push(arr[i]);
  }
  return newArr;
};

const reverseInPlace = (arr) => {
  for (let i = 0; i < arr.length; i++) {
    let temp = arr.splice(i, 1)[0];
    arr.unshift(temp);
  }
  return arr;
};

module.exports = {
  reverse,
  reverseInPlace,
};
