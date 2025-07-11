const countVowels = (aStr)=>{
   if(aStr.length === 0){
    return 0;
   }
    let vowelCount = 0;
    
    if(isAVowel(aStr[0])){
        vowelCount += 1;
    }
    
    vowelCount += countVowels(aStr.slice(1));
    return vowelCount;
    
}

function isAVowel(char){
    let vowel = ['a', 'e', 'i', 'o', 'u'];
    return vowel.includes(char);
}