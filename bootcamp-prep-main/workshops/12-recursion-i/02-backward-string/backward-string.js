const backwardString = (aStr)=>{
   if(aStr.length === 1){
    console.log(aStr);
   }else{
    let lastChar = aStr[aStr.length-1];
    console.log(lastChar);
    backwardString(aStr.slice(0, -1));
   }
}
console.log(backwardString('Sushil'));