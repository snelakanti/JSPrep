function confirmEnding(str, target) {
  // "Never give up and good luck will find you."
  // -- Falcor
  let one = str.substr(str.length - target.length);
  if (one === target) {
    return true;
  } else {
    return false;
  }
}

confirmEnding("Bastian", "n");

//endsWith() can be used - es6
