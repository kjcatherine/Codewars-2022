//11. You get an array of numbers, return the sum of all of the positives ones. Example [1,-4,7,12] => 1 + 7 + 12 = 20 .Note: if there is nothing to sum, the sum is default to 0.

//method a

// function positiveSum(arr) {
//   let negatives = [];
//   let sumPos = 0;
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] < 0) {
//       negatives.push(arr[i]);
//     } else {
//       sumPos += arr[i];
//     }
//   }
//   return sumPos;
// }
// positiveSum([3, -1, 4, 9, -7]);

//method b

// function positiveSum(arr) {
//   const total = arr.filter((cur) => cur > 0).reduce((acc, cur) => acc + cur, 0);
//   return total;
// }
// positiveSum([2, -3, 17, 5, -4]);

//method c
const positiveSum = (arr) =>
  arr
    .filter((number) => number > 0)
    .reduce((accumulator, current) => accumulator + current, 0);

positiveSum([3, -1, 4, 9, -7]);
