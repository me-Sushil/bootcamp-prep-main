const onlyOdds = (num) => {
    let sum = 0;
  
    for (let i = num; i >= 1; i--) {
        if (i % 2 === 1) {
          sum += i;
      }
    }
      return sum;
  }
    function onlyOdds2(num) {
    let sum = 0;
      while (num >= 1) {
        if (isOdd(num)) {
        sum += num;
      }
        num--;
    }
    return sum;
      function isOdd(num) {
      return num % 2 === 1;
    }
  }