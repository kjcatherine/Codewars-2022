"use strict";

//22
//Given an array of integers.Return an array, where the first element is the count of positives numbers and the second element is sum of negative numbers. 0 is neither positive nor negative. If the input is an empty array or is null, return an empty array.

function countPositivesSumNegatives(input) {
  let result = [];
  const positives = input.filter((int, i) => int > 0);
  console.log(positives);
  //.reduce((acc, int) => acc + int, 0);
  // const negatives = input
  //   .filter((int) => int < 0)
  //   .reduce((acc, int) => acc + int, 0);
  // result.push(positives, negatives);
  // console.log(result);
  //console.log(positives, negatives);
  //console.log(input.sort((a, b) => a - b));
}
countPositivesSumNegatives([
  1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14, -15,
]);
// you should return [10, -65].
