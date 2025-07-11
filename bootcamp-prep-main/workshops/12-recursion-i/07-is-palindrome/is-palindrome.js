const isPalindrome = (aStr) =>{
    if(aStr.length <= 1){
        return true;
    }
    let firstChar = aStr[0].toLowerCase();
    let lastChar = aStr[aStr.length - 1].toLowerCase();

    if(firstChar === lastChar){
        return isPalindrome(aStr.slice(1, -1));
    }else{
        return false;
    }
}