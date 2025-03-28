// YOUR CODE BELOW
/* Define a function lastCharacter that accepts two strings as 
 arguments. lastCharacter should return true if both strings 
 end with the same character. Otherwise, lastCharacter should 
 return false.*/
// lastCharacter('apples', 'pumpkins'); // => true
// lastCharacter('marker', 'pen'); // => false

const lastCharacter = (strOne, strTwo) =>{
    if(strOne[strOne.length - 1] === strTwo[strTwo.length -1 ]){
        return true;
    }else {
        return false;
    }
}
console.log(lastCharacter('apples', 'pumpkins'));
console.log(lastCharacter('marker', 'pen'));