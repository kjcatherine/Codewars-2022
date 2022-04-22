//6. Complete the square sum function so that it squares each number passed into it and then sums the results together.
function squareSum(numbers) {
  const result = numbers
    .map((num) => num ** 2)
    .reduce((acc, cur) => acc + cur, 0);
  return result;
}
