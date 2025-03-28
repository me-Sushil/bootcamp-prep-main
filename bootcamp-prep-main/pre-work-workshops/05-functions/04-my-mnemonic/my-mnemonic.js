// YOUR CODE BELOW
// Write a function myMnemonic that accepts up to four strings.
// myMnemonic should return a new string of the first characters
//  for each string argument.
//Note that the user may not pass in all four strings!

// one way
const myMnemonic = (First_Word, Second_Word, Third_Word, Fourth_Word) =>{
    let mnemonic = '';
    
    if(First_Word !== undefined) mnemonic += First_Word[0];
    if(Second_Word !== undefined) mnemonic += Second_Word[0];
    if(Third_Word !== undefined) mnemonic += Third_Word[0];
    if(Fourth_Word !== undefined) mnemonic += Fourth_Word[0];
    return mnemonic;
    }
    
    console.log(myMnemonic('Sushil', 'Kumar', 'Sharma', 'Singh')); 
    
    // Another way
    // Rest Operator = we're turning all the arguments comming into this function, into an array.
    // const myMnemonic = (...Words)=>{
    //     let mnemonic = '';
    
    //     for (let i=0; i< Words.length; ++i){
    //         const currentWord = Words[i];
    //         const currentCharacter = currentWord[0];
    
    //         mnemonic += currentCharacter;
    //     }
    //     return mnemonic;
    // }
    