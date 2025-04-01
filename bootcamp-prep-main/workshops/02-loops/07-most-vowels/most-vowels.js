const mostVowels = (sentence) => {
    let currentWord = '';
    let currentVowelCount = 0;
  
    let maxWord = '';
    let maxVowelCount = 0;
  
    for (let i = 0; i < sentence.length; i++) {
  
      let char = sentence[i];
  
      if (char !== ' ' && i !== sentence.length - 1) {
          currentWord += char;
          if (isVowel(char)) {
            currentVowelCount += 1;
        }
      }
        else {
          if (currentVowelCount > maxVowelCount) {
            maxVowelCount = currentVowelCount;
            maxWord = currentWord;
        }
          currentWord = '';
        currentVowelCount = 0;
      }
    }
      return maxWord;
      function isVowel(char) {
      let vowels = 'aeiouAEIOU';
  
      if (vowels.indexOf(char) >= 0) {
        return true;
      }
      else {
        return false;
      }
    }
  }