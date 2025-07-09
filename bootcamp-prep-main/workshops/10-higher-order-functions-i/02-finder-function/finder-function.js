function finderFunction(arr, callback) {
  for (let i = 0; i < arr.length; ++i) {
    let element = arr[i];

    let foundit = callback(element);
    if (foundit) {
      return true;
    }
    return -1;
  }
}
