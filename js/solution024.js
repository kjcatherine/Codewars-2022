//Challenge
//Given a set of numbers, return the additive inverse of each. Each positive becomes negatives, and the negatives become positives.
//invert([1,2,3,4,5]) == [-1,-2,-3,-4,-5]
//You can assume that all values are integers. Do not mutate the input array/list.

//Solution
function invert(array) {
  //since we cannot mutate the array, The map method is the way to go
  const invertArr = array.map((arr) =>
    arr >= 0 ? -Math.abs(arr) : Math.abs(arr)
  );
  return invertArr;
}
