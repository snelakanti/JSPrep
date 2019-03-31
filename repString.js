function repeatStringNumTimes(str, num) {
  // repeat after me
  let arr = [];
  for (i = 0; i < num; i++) {
    arr.push(str);
  }
  let result = arr.join("");
  // return str;
  return result;
}
repeatStringNumTimes("abc", 3);
