//Calculate average- Write a function which calculates the average of the numbers in a given list. Note: Empty arrays should return 0.

//SOLUTION
function find_average(array) {
  //first we check for an empty array
  if (array.length === 0) {
    return 0;
  } else {
    return array.reduce((acc, arr) => acc + arr, 0) / array.length;
  }
}
