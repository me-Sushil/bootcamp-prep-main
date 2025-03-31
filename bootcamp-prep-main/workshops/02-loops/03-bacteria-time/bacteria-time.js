const bacteriaTime = (currentNum, targetNum) => {

    if (targetNum < currentNum) {
      return 'targetNum must be larger than currentNum';
    }
  
    let numMinutes = 0;
  
    while (currentNum < targetNum) {
        currentNum *= 2;
        numMinutes += 20;
    }
  
    return numMinutes;
  }