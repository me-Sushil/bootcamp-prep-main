// YOUR CODE BELOW
// function timesTable(num){
//     return returnedValue;

//     function returnedValue(num1){
//         return num1 * num;
//     }
// }

function timesTable(num){
    return function (num1){
        return num * num1;
    }
}