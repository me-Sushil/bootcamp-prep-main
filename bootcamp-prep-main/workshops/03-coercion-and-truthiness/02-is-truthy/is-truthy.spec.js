describe('isTruthy', () => {

  it('is a function', () => {
    expect(typeof isTruthy).toEqual('function');
  });

  it('returns true if given the boolean true', () => {
    let returnedValue = isTruthy(true);
    expect(returnedValue).toEqual(true);
  });

  it('returns true if given a truthy number', () => {
    let returnedValue = isTruthy(1);
    expect(returnedValue).toEqual(true);
  });

  it('returns true if given a truthy string', () => {
    let returnedValue = isTruthy('Honesty is the best policy');
    expect(returnedValue).toEqual(true);
  });

  it('returns the expected string if given the boolean false', () => {
    let returnedValue = isTruthy(false);
    expect(returnedValue).toEqual('The boolean value false is falsey');
  });

  it('returns the expected string if given null', () => {
    let returnedValue = isTruthy(null);
    expect(returnedValue).toEqual('The null value is falsey');
  });

  it('returns the expected string if given undefined', () => {
    let returnedValue = isTruthy();
    expect(returnedValue).toEqual('undefined is falsey');
  });

  it('returns the expected string if given the number 0', () => {
    let returnedValue = isTruthy(0);
    expect(returnedValue).toEqual('The number 0 is falsey (the only falsey number)');
  });

  it('returns the expected string if given an empty string', () => {
    let returnedValue = isTruthy('');
    expect(returnedValue).toEqual('The empty string is falsey (the only falsey string)');
  });

});
