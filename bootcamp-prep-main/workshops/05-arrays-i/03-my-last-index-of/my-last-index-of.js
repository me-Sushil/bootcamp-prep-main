function myLastIndexOf(array, searchValue, startIdx) {

    if (startIdx === undefined) {
      startIdx = array.length - 1;
    }
      for (let i = startIdx; i >= 0; i--) {
        let element = array[i];
        if (element === searchValue) {
          return i;
      }
    }
      return -1;
  }