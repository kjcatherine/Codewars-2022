// Challenge: Clock shows h hours, m minutes and s seconds after midnight.Your task is to write a function which returns the time since midnight in milliseconds.
//past(1,1,0)=== 61000

//Solution
function past(h, m, s) {
  const secondsToMilsec = s * 1000; //converting seconds milliseconds
  const minutesToMilsec = m * 60000; //converting minutes to milliseconds
  const hoursToMilsec = h * 3600000; //convertinh hours
  //returning thier total
  return secondsToMilsec + minutesToMilsec + hoursToMilsec;
}
