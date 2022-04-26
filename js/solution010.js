//10.In this simple assignment you are given a number and have to make it negative. But maybe the number is already negative?
//method a
function makeNegative(num) {
  if (num > 0) {
    return -num;
  } else {
    return num;
  }
}
makeNegative(1);

//method b
function makeNegative(num) {
  return -Math.abs(num);
}
makeNegative(6);
