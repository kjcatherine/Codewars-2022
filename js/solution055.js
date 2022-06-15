//SHORTEST WORD- Simple, given a string of words, return the length of the shortest word(s). String will never be empty and you do not need to account for different data types.







//SOLUTION
function findShort(s) {
    const result = s.split(" ")
    const mapIt = result.map((word) => word.length);
    return Math.min(...mapIt)
    
//   const result = Math.min(...s.split(" ").map((word) => word.length));
//   return result;
}

findShort("bitcoin take over the world maybe who knows perhaps");