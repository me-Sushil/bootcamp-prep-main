describe('chainReaction', () => {
  function addTen(num) {
    return num + 10;
  }

  function subtractFive(num) {
    return num - 5;
  }

  function multiplyFive(num) {
    return num * 5;
  }

  it('is a function', () => {
    expect(typeof chainReaction).toEqual('function');
  });

  it('returns the chained result from one function', () => {
    let returnedValue = chainReaction(10, [addTen]);
    expect(returnedValue).toEqual(20);
  });

  it('returns the chained result from two functions', () => {
    let returnedValue = chainReaction(10, [addTen, multiplyFive]);
    expect(returnedValue).toEqual(100);
  });

  it('returns the chained result from three functions', () => {
    let returnedValue = chainReaction(10, [addTen, multiplyFive, subtractFive]);
    expect(returnedValue).toEqual(95);
  });

});
