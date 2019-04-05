let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

let evens = arr.filter(function(i) {
  return i % 2 === 0;
});
console.log(evens);

let odds = arr.filter(function(i) {
  return i % 2 !== 0;
});
console.log(odds);
