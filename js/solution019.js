//19. Create a function that checks if a number n is divisible by two numbers x AND y. All inputs are positive, non-zero digits.
function isDivisible(n, x, y) {
  if (n % x === 0 && n % y === 0) {
    console.log(true);
  } else {
    console.log(false);
  }
}
isDivisible(5, 25, 20);
