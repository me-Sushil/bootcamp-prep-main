// YOUR CODE BELOW
const onlyOne = (value1, value2, value3) =>{
if(!!value1 && !value2 && !value3){
    return true;
}
if(!value1 && !!value2 && !value3){
    return true;
}
if(!value1 && !value2 && !!value3){
    return true;
}
if(!value1 && !value2 && !value3){
    return false;
}
if(!value1 && !!value2 && !!value3){
    return false;
}
if(!!value1 && !value2 && !!value3){
    return false;
}
if(!!value1 && !!value2 && !value3){
    return false;
}
if(!!value1 && !!value2 && !!value3){
    return false;
}

}
// returns false if all of the values are falsey
// returns false if only the first value is falsey
// returns false if only the second value is falsey
// returns false if only the third value is falsey
// returns false if all of the values are truthy