function reverseArray(array) {
  let originalElements = [];

  // pop all of the elements from the original array, and store them in a new array
  while (array.length) {
    originalElements.push(array.pop());
  }

  // pop all of the elements out of new array, unshift them back into the original array
  while (originalElements.length) {
    array.unshift(originalElements.pop())
  }

  return array;
}