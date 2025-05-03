//.splice methods

/*.splice mutates the original Array; it's used to add or remove
 elements from the middle of an array (instead of adding or 
 removinf from either end)
*/

/*its first argument is an index; the second is a count of 
elements to delete from the element, starting at the provided 
index */

 /* it returns a new array with all of the removed elements */

//  let names = ['George', 'John', 'Thomas'];

//  let singleTermPersidents = names.splice(1,1);
//  console.log(names);
//  console.log(singleTermPersidents);


//  let beatles = ['Paul', 'George', 'John', 'Ringo'];
 //let newGroup = beatles.splice(1,2, "sagar", "Sushil");
//to add middle of the array 
// let newGroup = beatles.splice(1,0, "sagar", "Sushil");
//  console.log("original array but modifyed",beatles);
//  console.log("new array after splice",newGroup);



// join methods

// let beatles = ['Paul', 'George', 'John', 'Ringo'];

// let sentence = "the beatels were" + beatles.join(", ");
// console.log(sentence);


// concat method

// let array1 =["sushil", "sagar", "samir", "arjun"];
// let array2 =["paban", "suresh", "bibek", "umesh"];

// //we can concat like this
// console.log(array1 + "," + array2);
// // we can concat like this
// console.log(array1.concat(array2));


// related things array
// let relatedThings = [["alpha", "beta"],["gama", "sigma"]];
// console.log(relatedThings[0][1]);


// let rsvpGroup = [['jane', 'rock'], 'sushil', ['samir', 'suresh']];

// for(let i = 0; i<rsvpGroup.length; i++){
//     let element = rsvpGroup[i];

//     if(Array.isArray(element)){
//         for(let j = 0; j < element.length; j++){
//             console.log(element[j]);
//         }
//     }else{
//         console.log(element);
//     }
// }


// let grid = [
//     [1, 2, 3],
//     [4, 5, 6],
//     [7, 8, 9]
// ];
// console.log(grid[1]);
// let secondCol = [];

// for(let i=0; i<grid.length; i++){
//     secondCol.push(grid[i][1])
// }
// console.log(secondCol);

function evenAndOdd(originalArray) {
    let evenArray = [];
    let oddArray = [];

    for(let i=0; i < originalArray.length; i++){

        let num = originalArray[i];
        if(num%2 === 0){
           evenArray.push(num); 
        }else{
            oddArray.push(num);
        }

    }

    return [evenArray, oddArray];
}

const [evenArray, oddArray] = evenAndOdd([1,2,3,4,5,6,7,8]);
console.log("This is even Array", evenArray);
console.log("This is odd Array", oddArray);

