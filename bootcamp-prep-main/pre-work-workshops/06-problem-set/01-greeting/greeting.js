// YOUR CODE BELOW
// Define a function greeting that accepts an optional string 
// argument called name. greeting should return a personalized
// string if the name is present.

// greeting('Sadie'); // => Hello Sadie!
// greeting(); // => Hello!

const greeting = (name) => {
    if (name === undefined ){
        return "Hello!";
    }else{
       // return `Hello ${name}!`;
        return "Hello" + " " + name + "!";
    }
}
console.log(greeting());
console.log(greeting("Sushil"));




// we return implicitly with arrow functions when we dont use the curly braces to open up a function body.
// when there is only one arg in a arrow function we can actulay omit the parenthesis
// Ternary
// if someCondition ? true return : false return
// const greeting = name => name ? `Hello ${name}!`: 'Hello!';
// console.log(greeting());
// console.log(greeting('Sushil'));