//Highest and Lowest - In this little assignment you are given a string of space separated numbers, and have to return the highest and lowest number.

//SOLUTION
function highAndLow(numbers) {
  numbers = numbers.split(" ");
  const minMax = `${Math.max(...numbers)} ${Math.min(...numbers)}`;
  console.log(minMax);
}

highAndLow("1 2 3 4 5"); // return "5 1"
highAndLow("1 2 -3 4 5"); // return "5 -3"
highAndLow("1 9 3 4 -5"); // return "9 -5"
