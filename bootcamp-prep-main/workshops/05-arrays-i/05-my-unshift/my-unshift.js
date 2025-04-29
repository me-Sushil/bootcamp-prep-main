function myUnshift(originalArray, value) {

    let newArray = [value];
    for (let i = 0; i < originalArray.length; i++) {
        let element = originalArray[i];
      newArray.push(element);
    }
      return newArray;
}