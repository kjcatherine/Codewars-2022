//Jenny has written a function that returns a greeting for a user. However, she's in love with Johnny, and would like to greet him slightly different. She added a special case to her function, but she made a mistake.Can you help her?

//Jenny's code
// function greet(name) {
//  return "Hello, " + name + "!";
//   if (name === "Johnny")
//     return "Hello, my love!";
// }

//Solution
//Jenny put the conditional after she already returned the function so it wouldn't have worked, she had to say the condition first.
function greet(name) {
  if (name === "Johnny") {
    return "Hello, my love!";
  } else {
    return "Hello, " + name + "!";
  }
}
