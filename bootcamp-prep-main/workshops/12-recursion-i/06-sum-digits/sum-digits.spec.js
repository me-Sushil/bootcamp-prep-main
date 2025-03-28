describe('sumDigits', () => {

  it('is a function', () => {
    expect(typeof sumDigits).toEqual('function');
  });

  it('returns a number', () => {
    let returnedValue = sumDigits(123);
    expect(typeof returnedValue).toEqual('number');
  });

  it('returns the sum of the digits from the passed-in number', () => {
    let returnedValue = sumDigits(333);
    expect(returnedValue).toEqual(9);
  });

});
