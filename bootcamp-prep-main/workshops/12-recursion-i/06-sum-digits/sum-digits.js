const sumDigits = (aNum)=>{
    let aString = aNum.toString();

    if(aString.length === 1){
        return parseInt(aString);
    }
    let restDigit = aString.slice(1);
    let restNum = parseInt(restDigit);
    return parseInt(aString[0]) + sumDigits(restNum);
}