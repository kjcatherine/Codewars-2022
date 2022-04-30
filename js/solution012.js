//12. Complete the solution so that it reverses the string passed into it.

//a.
function solution(str) {
  //split string into an array
  let splitString = str.split("");
  //reverse the split string
  let reverseSplit = splitString.reverse();
  // join the reversed array
  let joinReverse = reverseSplit.join("");
  // return it
  return joinReverse;
}
solution("world");

//b
function solution(str) {
  const revArr = str.split("").reverse().join("");
  return revArr;
}
solution("Jessica");

//c.
function solution(str) {
  return str.split("").reverse().join("");
}
