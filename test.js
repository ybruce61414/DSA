// function timeConversion(s) {
//   // Write your code here
//   let stringSet = s.split(":");
//   let hourToNumber = parseInt(stringSet[0], 10);
//
//   if (stringSet[2].slice(-2) === "AM") {
//     hourToNumber = hourToNumber === 12 ? 0 : hourToNumber;
//   } else {
//     hourToNumber = hourToNumber === 12 ? 12 : hourToNumber + 12;
//   }
//
//   if (hourToNumber < 10) hourToNumber = "0" + hourToNumber.toString();
//
//   console.log(hourToNumber);
//
//   return `${hourToNumber}:${stringSet[1]}:${stringSet[2].slice(0, 2)}`;
// }
//
// console.log("---", timeConversion("12:40:22AM"));

// function flippingBits(n) {
//   // Write your code here
//   let to32bit = n.toString(2).padStart(32, "0");
//   let result = "";
//
//   for (let i = 0; i < to32bit.length; i++) {
//     result += to32bit[i] === "0" ? "1" : "0";
//   }
//
//   return result;
// }

// function diagonalDifference(arr) {
//   // Write your code here
//   let square = arr.length;
//
//   let LRD = 0;
//   let RLD = 0;
//
//   for (let i = 0; i < square; i++) {
//     LRD += arr[i][i];
//     RLD += arr[square - 1 - i][i];
//   }
//
//   return Math.abs(LRD - RLD);
// }
//
// console.log(
//   diagonalDifference([
//     [5, 2, 3],
//     [4, 5, 6],
//     [7, 8, 9],
//   ])
// );

// function countingSort(arr) {
//   // Write your code here
//   let sortArr = Array(100);
//
//   for (let idx of arr) {
//     sortArr[idx] = sortArr[idx] ? sortArr[idx] + 1 : 1;
//   }
//
//   for (let i = 0; i < sortArr.length; i++) {
//     if (!sortArr[i]) sortArr[i] = 0;
//   }
//
//   return sortArr;
// }
//
// console.log(countingSort([1, 2, 1, 4, 6, 4, 7]));

// function pangrams(s) {
//   // Write your code here
//   let hash = {};
//   let alph = "abcdefghijklmnopqrstuvwxyz";
//
//   console.log(s.toLowerCase().split(" ").join(""));
//
//   for (let i of s.toLowerCase().split(" ").join("")) {
//     hash[i] = hash[i] ? hash[i] + 1 : 1;
//   }
//
//   console.log(hash["a"]);
//
//   for (let i of alph) {
//     if (!hash[i]) {
//       return "not pangram";
//     }
//   }
//
//   return "pangram";
// }
//
// console.log(
//   pangrams("We promptly judged antique   ivory buckles for the next prize")
// );

// function tryf(arr) {
//   return arr.sort((a, b) => {
//     console.log("a,b", a, b);
//     if (a > b) return 1;
//     return -1;
//   });
// }

// function twoArrays(k, A, B) {
//   // Write your code here
//   A.sort((a, b) => {
//     if (a > b) return 1;
//     else return -1;
//   });
//   console.log("--a", A);
//   B.sort((a, b) => {
//     if (a > b) return -1;
//     else return 1;
//   });
//   console.log("--aB", B);
//
//   for (let i = 0; i < A.length; i++) {
//     if (A[i] + B[i] < k) return "NO";
//   }
//   return "YES";
// }

// function birthday(s, d, m) {
//   // Write your code here
//   let count = 0;
//   let sum = 0;
//
//   for (let i = 0; i < m; i++) {
//     sum += s[i];
//   }
//   for (let i = 0; i < s.length - m + 1; i++) {
//     if (sum === d) count += 1;
//     sum = sum - s[i] + s[i + m];
//   }
//
//   return count;
// }

// function sockMerchant(n, ar) {
//   // Write your code here
//   const freqCounter = {};
//   let count = 0;
//   for (let i of ar) {
//     freqCounter[i] = freqCounter[i] ? freqCounter[i] + 1 : 1;
//   }
//   for (let i in freqCounter) {
//     count = count + Math.floor(freqCounter[i] / 2);
//   }
//
//   return count;
// }
// console.log(sockMerchant(9, [10, 20, 20, 10, 10, 30, 50, 10, 20]));

function pageCount(n, p) {
  // Write your code here

  const front = Math.ceil((p - 1) / 2);
  let back;

  if (n - p > 1) {
    back = Math.ceil((n - p - 1) / 2);
  } else if (n - p === 1) {
    back = n % 2 === 0 ? 1 : 0;
  } else {
    back = 0;
  }

  console.log(front, back);
  return front < back ? front : back;
}

console.log(pageCount(6, 2));
