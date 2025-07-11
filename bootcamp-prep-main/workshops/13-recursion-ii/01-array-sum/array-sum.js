// YOUR CODE BELOW    
//arraySum([1, [2, 3, [4]]]) > 1 Dimensional  array
// let matrix = [            > 2 Dimensional  array
//   [1, 2, 3],   // row 0
//   [4, 5, 6],   // row 1
//   [7, 8, 9]    // row 2
// ];
// let cube = [               > Multidimensional array
//   [ [1, 2], [3, 4] ],
//   [ [5, 6], [7, 8] ]
// ];


const arraySum=(array)=>{
    let sum = 0;
    for(let i=0; i<array.length; i++){
        let element = array[i];

        if(Array.isArray(element)){
           sum += arraySum(element);
        }else{
            sum += element;
        }
    }
    return sum;
}


// const arraySum = (anArray) => {
//   let sum = 0;

//   anArray.forEach((elementOrArray) => {
//     if (Array.isArray(elementOrArray)) {
//       sum += arraySum(elementOrArray);
//     } else {
//       sum += elementOrArray;
//     }
//   });

//   return sum;
// };
