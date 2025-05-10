// YOUR CODE BELOW
const mySlice = (originalArray, startIdx, endIdx) => {
    
  if (startIdx === undefined) {
    startIdx = 0;
  } else if (startIdx < 0) {
    startIdx = originalArray.length + startIdx;
  }

  if (endIdx === undefined) {
    endIdx = originalArray.length;
  } else if (endIdx < 0) {
    endIdx = originalArray.length + endIdx;
  }

  let arrayCopy = [];

  for (let i = startIdx; i < endIdx; i++) {
    let element = originalArray[i];
    arrayCopy.push(element);
  }

  return arrayCopy;
};
