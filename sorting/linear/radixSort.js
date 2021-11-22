// now only valid for positive integer
const getDigit = (num, index) => {
  return Math.floor(num / Math.pow(10, index)) % 10;
};

const digitCount = (num) => {
  if (num === 0) return 1;
  return Math.floor(Math.log10(num)) + 1;
};

const mostDigit = (arr) => {
  let maxDigit = 0;
  for (let i = 0; i < arr.length; i++) {
    if (digitCount(arr[i]) > maxDigit) maxDigit = digitCount(arr[i]);
  }
  return maxDigit;
};

function radixSort(arr) {
  let maxDigitCount = mostDigit(arr);

  for (let i = 0; i < maxDigitCount; i++) {
    let digitBuckets = Array.from({ length: 10 }, () => []);
    for (let j = 0; j < arr.length; j++) {
      let digit = getDigit(arr[j], i);
      digitBuckets[digit].push(arr[j]);
    }
    arr = [].concat(...digitBuckets);
  }
  return arr;
}

console.log(radixSort([23, 345, 5467, 12, 2345, 0, 98, 52]));
