// YOUR CODE BELOW
function callCount(){
    let count = 0;
    return function(){
     count ++;
     
     return count;
    }
}