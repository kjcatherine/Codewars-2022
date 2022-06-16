//EXES AND OHS- Check to see if a string has the same amount of 'x's and 'o's. The method must return a boolean and be case insensitive. The string can contain any char.

//SOLUTION
function XO(str) {
  let xNum = "";
  let oNum = "";
  for (let i = 0; i < str.length; i++) {
    if (str[i].toLowerCase() === "x") {
      xNum += str[i];
    } else if (str[i].toLowerCase() === "o") {
      oNum += str[i];
    }
  }
  return xNum.length === oNum.length;
}