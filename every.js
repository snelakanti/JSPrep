let arr = [1, -2, 3, 4, -5, 6, 7, -8, 9, -10];

let hasNegativeNums = arr.every(function(i) {
  return i < 0;
});
console.log(hasNegativeNums);

//like some but every item should staisfy the condition for true
