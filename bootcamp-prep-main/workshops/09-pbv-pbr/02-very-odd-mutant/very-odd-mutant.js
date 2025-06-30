// YOUR CODE BELOW
// let allTheNums = [1, 2, 3, 4, 5, 6, 7, 8];
// let countRemoved = veryOddMutant(allTheNums);

// console.log('allTheNums:', allTheNums);
// // [1, 'normie', 3, 'normie', 5, 'normie', 7, 'normie'];

// console.log('countRemoved:', countRemoved);
// // 4

function veryOddMutant(arr){
    let countOfMutedEven = 0;
    for(let i=0; i<arr.length; i++){
        let num=arr[i];

        if(num % 2 === 0){
            arr[i] = 'normie';
            ++countOfMutedEven;
        }
    }
    return countOfMutedEven;
}
let allTheNums = [1, 2, 3, 4, 5, 6, 7, 8];