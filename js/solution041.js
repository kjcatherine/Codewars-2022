//Given a random non-negative number, you have to return the digits of this number within an array in reverse order.

function digitize(n) {
  let num = n + "";
  console.log(num.split("").reverse().map(Number));
}
digitize(348597);
