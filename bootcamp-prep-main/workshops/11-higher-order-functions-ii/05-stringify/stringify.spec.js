describe('stringify', () => {
  it('is a function', () => {
    expect(typeof stringify).toEqual('function');
  });

  it('returns a function', () => {
    let returnedValue = stringify(function() {});
    expect(typeof returnedValue).toEqual('function');
  });

  it('returns a function that, when invoked, always returns a string', () => {
    function returnsBoolean() {
      return true;
    }

    let returnedFunction = stringify(returnsBoolean);
    let returnedValue = returnedFunction();

    expect(typeof returnedValue).toEqual('string');
  });

});
