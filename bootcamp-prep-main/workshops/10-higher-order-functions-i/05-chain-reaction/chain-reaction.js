// YOUR CODE BELOW
function chainReaction(value, callbacks){
    callbacks.forEach(function(callback){
        value = callback(value);
    });
    return value; 
}