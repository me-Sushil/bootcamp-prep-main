function myIncludes(array, searchValue) {
    for (let i = 0; i < array.length; i++) {
        let element = array[i];
        if (element === searchValue) {
          return true;
      }
    }
    return false;
  }