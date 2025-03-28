### Every Which Way

Write a function `everyWhichWay` that accepts three number arguments. `everyWhichWay`
should:

  - return 'sum' if the sum of the first two numbers equals the third
  - return 'difference' if the first number minus the second equals the third
  - return 'product' if the product of the first two numbers equals the third
  - return 'fraction' if the first number divided by the second equals the third
  - return null if none of the above are true

```javascript
everyWhichWay(10, 20, 30); // => sum

everyWhichWay(50, 20, 30); // => difference

everyWhichWay(4, 4, 16); // => product

everyWhichWay(100, 10, 10); // => fraction

everyWhichWay(1, 1000, 50); // => null
```
