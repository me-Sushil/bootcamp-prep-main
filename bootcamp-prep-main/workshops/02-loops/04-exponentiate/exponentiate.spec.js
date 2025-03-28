describe('exponentiate', () => {

  it('is a function', () => {
    expect(typeof exponentiate).toEqual('function');
  });

  it('returns a number', () => {
    let returnedValue = exponentiate(1, 1);
    expect(typeof returnedValue).toEqual('number');
  });

  it('returns the value of the first num raised to the second', () => {
    let returnedValue = exponentiate(3, 6);
    expect(returnedValue).toEqual(Math.pow(3, 6));
  });

  it('returns 1 if the power is 0', () => {
    let returnedValue = exponentiate(20, 0);
    expect(returnedValue).toEqual(1);
  });

});
