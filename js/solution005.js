//5. Simple, remove the spaces from the string, then return the resultant string.

function noSpace(x) {
  const removeSpace = x.split(" ").join("");
  return removeSpace;
}
