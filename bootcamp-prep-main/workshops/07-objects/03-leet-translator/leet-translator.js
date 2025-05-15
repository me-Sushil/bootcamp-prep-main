let letters = [ 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z' ];
let leetChars = ['@', '8', '(', '|)', '3', 'ph', 'g', '#','l', '_|', '|<', '1', "|'|'|", '/\/', '0', '|D', '(,)', '|2', '5', '+', '|_|', '|/', "|/|/'",'><', 'j', '2'];

// YOUR CODE BELOW
const leetTranslator = (aStr) =>{
    const leetDict = {};

    for (let i=0; i< letters.length; i++){
        const currentLetter = letters[i];
        const currentLeet = leetChars[i];
        leetDict[currentLetter] = currentLeet;
    }
    let translateString = '';
    for(let i=0; i<aStr.length; i++){
        const currentCharacter = aStr[i].toLowerCase();
  
        translateString += leetDict[currentCharacter];
    }
    return translateString;
}