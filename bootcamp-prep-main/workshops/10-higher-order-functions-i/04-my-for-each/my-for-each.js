// YOUR CODE BELOW
function myForEach(array, callback){
    for(let i=0; i<array.length; i++){
        let element = array[i];

        callback(element, i);
    }
}
