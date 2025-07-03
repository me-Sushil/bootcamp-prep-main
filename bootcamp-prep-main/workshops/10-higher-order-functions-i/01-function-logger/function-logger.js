// YOUR CODE BELOW

function functionLogger(callback, argu){
    console.log("Function starting");

    let result = callback(argu);
    console.log("Function complete");
    return result; 
}

