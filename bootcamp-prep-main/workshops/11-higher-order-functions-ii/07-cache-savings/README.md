### Cache Savings

Caching is used in software engineering to temporarily store the result of an
"expensive" operation (takes a lot of time or memory). If that result is needed
again in the near future, it can be retrieved from the cache instead of calculating
it again.

Write a function, cacheSavings, that takes a callback and returns a new function
that takes one argument. When the new function is called for the first time,
it should call the callback with the argument and save the result of the function
call. If the new function is called again with the same argument, the new
function should retrieve the stored value instead of calling the callback again!

```javascript
function adds10(num) {
  let start = Date.now();
  let end = Date.now();

  // pause for 3 seconds, to make the function expensive!
  while (end - start < 3000) {
    end = Date.now();
  }

  return num + 10;
}

let cachedAdds10 = cacheSavings(adds10);

cachedAdds10(20); // => returns 30, takes 3 seconds!
cachedAdds10(0); // returns 10, takes 3 seconds!

cachedAdds10(20); // => returns 30, takes no time at all!
```
