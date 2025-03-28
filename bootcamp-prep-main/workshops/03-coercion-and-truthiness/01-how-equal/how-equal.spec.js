describe('howEqual', () => {

  it('is a function', () => {
    expect(typeof howEqual).toEqual('function');
  });

  it('returns a string', () => {
    let returnedValue = howEqual(10, 5 + 5);
    expect(typeof returnedValue).toEqual('string');
  });

  it('returns the string \'loosely\' if the values are loosely equal', () => {
    let returnedValue = howEqual(0, false);
    expect(returnedValue).toEqual('loosely');
  });

  it('returns the string \'strictly\' if the values are strictly equal', () => {
    let returnedValue = howEqual(0 === -1, false);
    expect(returnedValue).toEqual('strictly');
  });

  it('returns the string \'not equal\' if the values are not equal', () => {
    let returnedValue = howEqual(0, -1);
    expect(returnedValue).toEqual('not equal');
  });

});
