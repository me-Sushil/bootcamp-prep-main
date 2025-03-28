describe('callCount', () => {
  let testObj;

  it('is a function', () => {
    expect(typeof callCount).toEqual('function');
  });

  it('returns a function', () => {
    let returnedValue = callCount();
    expect(typeof returnedValue).toEqual('function');
  });

  it('returns a function that, when invoked, returns the number of times it has been called', () => {
    let returnedFunction = callCount();

    returnedFunction();
    returnedFunction();
    let finalCount = returnedFunction();

    expect(finalCount).toEqual(3)
  });

});
