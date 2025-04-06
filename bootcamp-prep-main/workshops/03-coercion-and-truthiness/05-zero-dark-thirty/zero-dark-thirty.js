// YOUR CODE BELOW
const zeroDarkThirty = (num) =>{

   if(num === 0){
    return NaN;
   }

  num = String(num);

  let newValue = '';

  for (let i = 0; i < num.length; i++) {
    let currentChar = num[i];

    if (currentChar !== '0') {
      newValue += currentChar;
    }
  }

  return parseFloat(newValue);
}