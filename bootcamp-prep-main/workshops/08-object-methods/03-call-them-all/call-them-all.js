// YOUR CODE BELOW
function callThemAll(obj, value){
    let returnedArray = [];

    let valueOfObj = Object.values(obj);
    for(let i=0; i<valueOfObj.length; ++i){
        let currentValuesOfFun = valueOfObj[i];

        if(typeof currentValuesOfFun === 'function'){
            let resultOfFun = currentValuesOfFun(value);

            returnedArray.push(resultOfFun);
        }
    }
    return returnedArray;

}