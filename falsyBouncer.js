function bouncer(arr) {
  // Don't show a false ID to this bouncer.
  let arr1 = [];
  for (let i = 0; i < arr.length; i++) {
    if (Boolean(arr[i]) !== false) {
      arr1.push(arr[i]);
    }
  }
  console.log(arr1);
  return arr1;
}

bouncer([7, "ate", "", false, 9]);

// let one = false;  //one = 2
// let two = Boolean(one);
// console.log(two); //false //true
//falsy values:  false, null, 0, "", undefined, and NaN.
