//JADEN CASING STRINGS- Jaden Smith, the son of Will Smith, is the star of films such as The Karate Kid (2010) and After Earth (2013). Jaden is also known for some of his philosophy that he delivers via Twitter. When writing on Twitter, he is known for almost always capitalizing every word. For simplicity, you'll have to capitalize each word, check out how contractions are expected to be in the example below.

//Your task is to convert strings to how they would be written by Jaden Smith. The strings are actual quotes from Jaden Smith, but they are not capitalized in the same way he originally typed them.

//SOLUTION
String.prototype.toJadenCase = function () {
  return this.split(" ").map((word) => {
        return word[0].toUpperCase() + word.slice(1);
    }).join(" ");
};

//Why does this solution not work?
// function jadenCased (str){
//     const lower = str.toLowerCase()
//     const toArray = lower.split(' ')
//     const emptyArr = []
//     for (const name of toArray){
// emptyArr.push(name[0].toUpperCase() + name.slice(1))
//     }
//     return emptyArr.join(' ') 
// }
// jadenCased("How can mirrors be real if our eyes aren't real");