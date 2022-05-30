//Given an array of integers, return a new array with each value doubled.

//SOLUTION
function maps(x) {
  //map returns a whole new array
  return x.map((num) => num + num);
}
maps([3, 5, 8, 9]);
