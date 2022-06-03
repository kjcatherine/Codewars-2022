//square ever digits--you are asked to square every digit of a number and concatenate them.For example, if we run 9119 through the function, 811181 will come out, because 92 is 81 and 12 is 1.

function squareDigits(num){
  //get an arrays of digits
  const digits = num.toString().split('')
  //square each, join them and turn into number using plus operator
  const squared = digits.map(num => num * num).join('')
  console.log(+squared)
}
squareDigits(2345)