//20.Write a function findNeedle() that takes an array full of junk but containing one "needle" After your function finds the needle it should return a message (as a string) that says:
//"found the needle at position " plus the index it found the needle
function findNeedle(haystack) {
  haystack.forEach((arr, i) => {
    if (arr.includes("needle")) return `found the ${arr} at position ${i}`;
  });
  // let str = `found the needle at position `;
  // str = str + haystack.indexOf("needle");
  // return str;
}

findNeedle(["hay", "junk", "hay", "hay", "moreJunk", "needle", "randomJunk"]);
