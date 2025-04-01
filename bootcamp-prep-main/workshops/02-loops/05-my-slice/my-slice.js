// YOUR CODE BELOW
const mySlice = (originalString, startIdx, endIdx) => {

    if (startIdx === undefined) {
      return originalString;
    }
  
    if (endIdx === undefined) {
      endIdx = originalString.length;
    }
  
    let slicedString = '';
  
    for (let i = startIdx; i < endIdx; i++) {
  
      let char = originalString[i];
  
      slicedString += char;
    }
  
    return slicedString;
  }