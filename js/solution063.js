//MUMBLING- This time no story, no theory. The examples below show you how to write function accum. Examples: accum("abcd") -> "A-Bb-Ccc-Dddd"
//The parameter of accum is a string which includes only letters from a..z and A..Z.

//SOLUTION
function accum(s) {
  return [...s]
    .map((char, index) => char.toUpperCase() + char.toLowerCase().repeat(index))
    .join("-");
}
const result = accum("aBookA");
console.log(result);
