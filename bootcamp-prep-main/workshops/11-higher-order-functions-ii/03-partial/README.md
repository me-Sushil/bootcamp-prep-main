### Partial

Write a function, partial, that accepts a callback  and one argument (let's call
it 'arg a'). Partial should return a new function. When invoked, the new
function will:
- Accept its own argument (let's call it 'arg b')
- Call the callback, passing in 'arg a' as the first argument and 'arg b' as the second argument
- Return the value returned by the callback


```javascript
function summer (a, b) {
  return a + b
};

let sumFive = partial(summer, 5);
sumFive(10) // => 15;
```
