### My Splice

Write a 'mySplice' function that mirrors the behavior of JavaScript's .splice()
array method. However, mySplice should accept the array to operate on as an
argument, rather than being invoked as a method on that array.

mySplice only needs to take one element to add to the array (the .splice method
can actually take any number of values to add).

Do not use .splice in your function.


```javascript
let myArray = [1, 2, 3];

mySplice(myArray, 1, 1, 'apples')) // => [2]

console.log(myArray)    // [1,'apples', 3]
```
