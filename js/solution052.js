//DESCENDING ORDER- Your task is to make a function that can take any non-negative integer as an argument and return it with its digits in descending order. Essentially, rearrange the digits to create the highest possible number.

function nonNegativeInt (num){
const intToStr = num + ''
const descendingInt = intToStr.split('').sort((a,b) => (b-a)).join('')
return +descendingInt
}

nonNegativeInt(6789569)