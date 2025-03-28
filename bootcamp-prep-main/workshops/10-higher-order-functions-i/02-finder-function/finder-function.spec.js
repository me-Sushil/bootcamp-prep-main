describe('finderFunction', () => {

  it('is a function', () => {
    expect(typeof finderFunction).toEqual('function');
  });

  it('returns a number', () => {
    let returnedValue = finderFunction([1, 2, 3], function(){return true;});
    expect(typeof returnedValue).toEqual('number');
  });

  it('returns the index of the first element that causes the callback to return true', () => {
    function isApple(string) {
      return string === 'apple';
    }

    let fruits = ['not an apple', 'not an apple', 'apple', 'not an apple'];

    let returnedValue = finderFunction(fruits, isApple);
    expect(returnedValue).toEqual(2);
  });

  it('returns -1 if the callback never returns true', () => {
    function isGreaterThanZero(number) {
      return number > 0;
    }

    let negativeNums = [-10, -20, -30];

    let returnedValue = finderFunction(negativeNums, isGreaterThanZero);
    expect(returnedValue).toEqual(-1);
  });

});


