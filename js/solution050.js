//Get the middle character- You are going to be given a word. Your job is to return the middle character of the word. If the word's length is odd, return the middle character. If the word's length is even, return the middle 2 characters.
//Example: Kata.getMiddle("test") should return "es"

//SOLUTION
function getMiddle(s) {
  let middle = "";
  if (s.length % 2 === 1) {
    middle = [s[(s.length / 2) | 0]];
  } else {
    middle = [s[(s.length / 2 - 1) | 0], s[(s.length / 2) | 0]];
  }
  return middle.join("");
}

getMiddle("testing");
