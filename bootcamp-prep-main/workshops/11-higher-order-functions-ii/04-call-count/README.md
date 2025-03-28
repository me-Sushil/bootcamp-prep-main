### Call Count

Write a function, callCount, that returns a new function. The new function
should return the number of times its been called.

```javascript
let newFunction1 = callCount();
let newFunction2 = callCount();

newFunction1(); // => 1
newFunction1(); // => 2

newFunction2(); // => 1
newFunction2(); // => 2
```
