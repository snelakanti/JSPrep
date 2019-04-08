function frankenSplice(arr1, arr2, n) {
  // It's alive. It's alive!
  let arr3 = arr2.slice();
  let one = arr3.splice(n);
  return arr3.concat(arr1, one);
  // console.log(arr3.concat(arr1, one));
}

frankenSplice([1, 2, 3], [4, 5, 6], 1);
//slice for strings and arrays splice for arrays

// splice() changes the original array whereas slice() doesn't.

// See the examples below:

// var array=[1,2,3,4,5];
// console.log(array.splice(2));
// This will return [3,4,5]. The original array is affected resulting in array being [1,2].

// var array=[1,2,3,4,5]
// console.log(array.slice(2));
// This will return 3,4,5. The original array is NOT affected with resulting in array being [1,2,3,4,5].
