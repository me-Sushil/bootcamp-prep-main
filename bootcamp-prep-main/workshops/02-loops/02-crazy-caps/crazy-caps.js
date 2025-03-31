const crazyCaps= (mainString) => {
    let crazyString = '';
  
    for (let i = 0; i < mainString.length; i++) {
        let char = mainString[i];
  
      if (i % 2 === 0) {
          crazyString += char;
      }
        else {
          char = char.toUpperCase();
          crazyString += char;
      }
    }
      return crazyString;
  }