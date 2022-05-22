//Given a string of digits, you should replace any digit below 5 with '0' and any digit 5 and above with '1'. Return the resulting string.
//Note: input will never be an empty string

//SOLUTION
function fakeBin(x) {
  //find the numbers within the brackets and replace them accordingly.
  return x.replace(/[1234]/g, "0").replace(/[56789]/g, "1");
}
fakeBin("45385593107843568");
