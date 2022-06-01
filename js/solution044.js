//Your task is to make two functions (max and min, or maximum and minimum, etc., depending on the language) that receive a list of integers as input and return, respectively, the largest and lowest number in that list.

//SOLUTION
const min = (list) => Math.min(...list);
const max = (list) => Math.max(...list);

max([4, 6, 2, 1, 9, 63, -134, 566]);
min([4, 6, 2, 1, 9, 63, -134, 566]);
