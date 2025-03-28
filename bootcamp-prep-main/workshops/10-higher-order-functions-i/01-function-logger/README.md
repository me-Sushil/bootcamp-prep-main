### Function Logger

Write a function functionLogger that accepts a function to run and an argument
to pass to that function. Your functionLogger should log the message
"Function starting", run the function, log "Function complete", and return the
result of the function call.

Note the unit tests will check that the correct value is returned; they do not
check if you console logged the right values at the right time.

```javascript
function squareNum(x) {
  return x * x;
}

let squareOfFour = functionLogger(squareNum, 4);
// Function starting
// Function complete

console.log(squareOfFour)    // 16
```
