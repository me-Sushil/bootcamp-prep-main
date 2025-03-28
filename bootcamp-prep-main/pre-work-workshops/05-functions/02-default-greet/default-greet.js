// YOUR CODE BELOW
//Define a function, defaultGreet, that takes a first and a last name. defaultGreet should return a string greeting for the given names. If the user does not define a last name, assume the last name is 'Doe'.

const defaultGreet = (first_name, last_name) =>{
    if (last_name === undefined) {
        last_name = 'Doe';
}
return "Hi" + " " + first_name + " " + last_name + "!";
}
console.log(defaultGreet("Sushil"));
console.log(defaultGreet("Sushil", "BK"));