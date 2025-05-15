// YOUR CODE BELOW
const frequencyAnalysis =(string)=>{
   let charFrequency = {};

   for(let i = 0; i < string.length; i++){
    let char = string[i];

    if(!charFrequency[char]){
        charFrequency[char]=1;
    }else{
        charFrequency[char]++;
    }
   }

    return  charFrequency;
}