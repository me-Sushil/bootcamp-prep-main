// // YOUR CODE BELOW
// this is pass by value example

// function changeValue(num) {
//   num = 100;
//   console.log("Inside function:", num); // 100
// }

// let x = 50;
// changeValue(x);
// console.log("Outside function:", x); // 50


//This is pass by reference example
// function addItem(arr) {
//   arr.push("Momo");
//   console.log("Inside function:", arr); // ["Pizza", "Burger", "Momo"]
// }

// let food = ["Pizza", "Burger"];
// addItem(food);
// console.log("Outside function:", food); // ["Pizza", "Burger", "Momo"]


function veryOdd(arr){
    let oddNums = [];
    for(let i=0; i<arr.length; i++){
        let num = arr[i];
        if(num % 2 === 1){
            oddNums.push(num);
        }
    }
    return oddNums;
}

// let allTheNums = [1, 2, 3, 4, 5, 6, 7, 8];
// let oddNums = veryOdd(allTheNums);

// console.log('oddNums:', oddNums); // [1, 3, 5, 7];
// console.log('allTheNums:', allTheNums); // [1, 2, 3, 4, 5, 6, 7, 8]
