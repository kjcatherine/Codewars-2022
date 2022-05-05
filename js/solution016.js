//16. Create a function that takes an integer as an argument and returns "Even" for even numbers or "Odd" for odd numbers.
function even_or_odd(nums) {
  if (nums % 2 === 0) {
    return "Even";
  } else {
    return "Odd";
  }
  //nums.filter((num) => (num % 2 === 0 ? "Even" : "Odd"));
}
even_or_odd(7);
