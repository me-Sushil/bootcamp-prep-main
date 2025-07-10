// YOUR CODE BELOW

 function partial(callback, arga ){

    return function(argb){
    return callback(arga, argb);
    }
 }