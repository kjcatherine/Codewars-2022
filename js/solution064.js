//TWO TO ONE- Take 2 strings s1 and s2 including only letters from ato z. Return a new sorted string, the longest possible, containing distinct letters - each taken only once - coming from s1 or s2. Examples: a = "xyaabbbccccdefww" b = "xxxxyyyyabklmopq" longest(a, b) -> "abcdefklmopqwxy"

//SOLUTION
function longest(s1, s2) {
  const unique = [...new Set([...s1, ...s2])];
  const sorted = unique.sort();
  const joined = sorted.join("");
  return joined;
}
longest("xyaabbbccccdefww", "xxxxyyyyabklmopq");
