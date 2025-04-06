// YOUR CODE BELOW
const myOr = (value1, value2, value3) =>{
    if(!!value1){
        return value1;
    }
    if(!!value2){
        return value2;
    }
    else{
        return value3;
    }

}
const myAnd = ( value4, value5, value6) =>{
    if(!value4){
        return value4;
    }
    if(!value5){
        return value5;
    }
    if(!value6){
        return value6;
    }
    else{
        return value6;
    }
}