// YOUR CODE BELOW
function finderFunction(array, callback) {

  // loop through the given array
  for (let i = 0; i < array.length; i++) {
    let element = array[i];

    // run the callback, passing in the current element
    let foundIt = callback(element);

    // if the callback returned true...
    if (foundIt) {

      // ...return the current index
      return i;
    }
  }

  // if we never found it, return -1
  return -1;
}