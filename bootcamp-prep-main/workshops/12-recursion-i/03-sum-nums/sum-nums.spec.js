describe('sumNums', () => {

  it('is a function', () => {
    expect(typeof sumNums).toEqual('function');
  });

  it('returns a number', () => {
    let returnedValue = sumNums(3);
    expect(typeof returnedValue).toEqual('number');
  });

  it('returns the sum of all the numbers between its given number and one', () => {
    let returnedValue = sumNums(5);
    expect(returnedValue).toEqual(5 + 4 + 3 + 2 + 1);
  });

});
