// YOUR CODE BELOW
function whosASpecial(arr){
    let result = '';

    arr.forEach(({name, species}, idx)=>{
    result += `${name} the ${species} is very special!`;

    if(idx !== arr.length -1){
        result += " ";
    }
    })
    return result;
}