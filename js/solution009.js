//9. Write a function called repeatStr which repeats the given string string exactly n times.
//method a.
function repeatStr(n, s) {
  return s.repeat(n);
}
repeatStr(6, "I");

//method b
repeatStr = (n, s) => (n > 0 ? s.repeat(n) : "");

//method c
function repeatStr(num, str) {
  if (num > 0) return str.repeat(num);
  else return "";
}
repeatStr(7, "hello");
