//Return the number (count) of vowels in the given string. We will consider a, e, i, o, u as vowels for this Kata (but not y). The input string will only consist of lower case letters and/or spaces.

//SOLUTION
function getCount(str) {
  const vowels = ["a", "e", "i", "o", "u"]
  let vowelsCount = 0;
  for (const vow of str.toLowerCase()){
    if(vowels.includes(vow)){
       vowelsCount++
       }
  }
  
  return vowelsCount;
}

getCount('nebuchadnezar')