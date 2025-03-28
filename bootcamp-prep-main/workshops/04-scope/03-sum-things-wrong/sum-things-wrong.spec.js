describe('sumThingsWrong', () => {

  it('is a function', () => {
    expect(typeof sumThingsWrong).toEqual('function');
  });

  it('returns a number', () => {
    let returnedValue = sumThingsWrong(10, 20);
    expect(typeof returnedValue).toEqual('number');
  });

  it('returns the sum of two positive numbers', () => {
    let returnedValue = sumThingsWrong(50, 100);
    expect(returnedValue).toEqual(150);
  });

  it('returns the sum of a positive and negative number', () => {
    let returnedValue = sumThingsWrong(5, -10);
    expect(returnedValue).toEqual(-5);
  });

  it('returns the sum of two negative numbers', () => {
    let returnedValue = sumThingsWrong(-1, -1);
    expect(returnedValue).toEqual(-2);
  });

});
