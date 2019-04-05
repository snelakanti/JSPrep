let arr = [1, -2, 3, 4, -5, 6, 7, -8, 9, -10];

let hasNegativeNums = arr.some(function(i) {
  return i < 0;
});
console.log(hasNegativeNums);

//some retrns true or false depending on the condition
