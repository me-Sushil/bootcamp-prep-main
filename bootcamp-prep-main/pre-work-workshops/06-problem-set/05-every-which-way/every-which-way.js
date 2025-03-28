// YOUR CODE BELOW
// Write a function everyWhichWay that accepts three number arguments. everyWhichWay should:
// return 'sum' if the sum of the first two numbers equals the third
// return 'difference' if the first number minus the second equals the third
// return 'product' if the product of the first two numbers equals the third
// return 'fraction' if the first number divided by the second equals the third
// return null if none of the above are true
// everyWhichWay(10, 20, 30); // => sum
// everyWhichWay(50, 20, 30); // => difference
// everyWhichWay(4, 4, 16); // => product
// everyWhichWay(100, 10, 10); // => fraction
// everyWhichWay(1, 1000, 50); // => null

const everyWhichWay = (a,b,c)=>{
    if(a+b === c) return 'sum';
    if(a-b === c) return 'difference';
    if(a*b === c) return 'product';
    if(a/b === c) return 'fraction';
    return null;

}

console.log(everyWhichWay(10, 20, 30)); // => sum
console.log(everyWhichWay(50, 20, 30)); // => difference
console.log(everyWhichWay(4, 4, 16)); // => product
console.log(everyWhichWay(100, 10, 10)); // => fraction
console.log(everyWhichWay(1, 1000, 50)); // => null