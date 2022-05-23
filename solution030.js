//Complete the solution so that it reverses all of the words within the string passed in.

//SOLUTION
function reverseWords(str) {
  //we have to split first into an array because reverse is an array method, then join it back into a string.
  const reversedWord = str.split(" ").reverse().join(" ");
  return reversedWord;
}
