describe('simpleSum', () => {

  it('is a function', () => {
    expect(typeof simpleSum).toEqual('function');
  });

  it('returns a number', () => {
    let returnedValue = simpleSum(1, 2);
    expect(typeof returnedValue).toEqual('number');
  });

  it('returns the sum of two positive numbers', () => {
    let returnedValue = simpleSum(1, 2);
    expect(returnedValue).toEqual(3);
  });

  it('returns the sum of two negative numbers', () => {
    let returnedValue = simpleSum(-10, -20);
    expect(returnedValue).toEqual(-30);
  });

});
