// YOUR CODE BELOW
// Define a function doYouPlayTheTheremin that accepts a string as
//  an argument. doYouPlayTheTheremin should return true if the 
// inputted string starts with the letters s or S. Otherwise, 
// doYouPlayTheTheremin should return false.

// doYouPlayTheTheremin('Griffin'); // => false
// doYouPlayTheTheremin('Scott'); // => true

const doYouPlayTheTheremin = (string = '') =>{
    if (string[0] === 's' || string[0] === 'S'){
        return true;
    }else {
        return false;
    }
}

console.log(doYouPlayTheTheremin());
console.log(doYouPlayTheTheremin('Sushil'));