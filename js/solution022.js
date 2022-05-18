"use strict";

//22
// Given an array of integers.

// Return an array, where the first element is the count of positives numbers and the second element is sum of negative numbers.

// If the input array is empty or null, return an empty array.

function countPositivesSumNegatives(input) {
  let positives = 0;
  let negatives = 0;
  if (input === null || input.length === 0) {
    return [];
  } else {
    input.forEach((num) => (num > 0 ? positives++ : (negatives += num)));
  }
  return [positives, negatives];
}
countPositivesSumNegatives([1, 2, 3, 4, 5, -12, -2, -23, -60]);

//HOW I SOLVED THIS
//1. I set two variables, positiveNums and negativeNums, to 0.

//2. I then proceeded to check the condition of the challenge first,(if the input is null or empty)

//3. Where input is neither empty, nor null, i checked if the elements in the array are greater than zero, ran a connditional to count the positives and proceeded to add the negative numbers together.I used a forEach method to achieve this.

//4. To finish up, I returned the result of the two variables in an array
