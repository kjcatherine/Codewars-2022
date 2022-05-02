//13. Complete the method that takes a boolean value and return a "Yes" string for true, or a "No" string for false.

//a.
function boolToWord(bool) {
  if (bool === true) {
    return "Yes";
  } else {
    return "No";
  }
}

//b.
function boolToWord(bool) {
  const boolStr = bool === true ? "Yes" : "No";
  return boolStr;
}
