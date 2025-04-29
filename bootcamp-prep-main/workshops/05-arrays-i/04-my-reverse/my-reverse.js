function myReverse(originalArray) {
    let reversedArray = [];
      for (let i = originalArray.length - 1; i >= 0; i--) {
        let element = originalArray[i];
        reversedArray.push(element);
    }
      return reversedArray
  }
  