//It's the academic year's end, fateful moment of your school report. The averages must be calculated. All the students come to you and entreat you to calculate their average for them. Easy ! You just need to write a script.
//Return the average of the given array rounded down to its nearest integer.The array will never be empty.

//Solution
//Sol 1
// function getAverage(marks){
//   const add = marks.reduce((acc, mark) => acc + mark, 0 )
//   const mean = add / marks.length
//   return Math.floor(mean)
// }

//Sol 2
function getAverage(marks) {
  //Math.floor rounds the number up while we perform the operations
  return Math.floor(marks.reduce((x, y) => x + y) / marks.length);
}
