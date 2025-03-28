describe('partial', () => {

  it('is a function', () => {
    expect(typeof partial).toEqual('function');
  });

  it('returns a function', () => {
    let returnedValue = partial(function() {}, 10);
    expect(typeof returnedValue).toEqual('function');
  });

  it('returns a function that calls the given function, passing in the value as an argument', () => {
    function concatsStrings(string1, string2) {
      return string1 + string2;
    }

    let returnedFunction = partial(concatsStrings, 'hello');
    let returnedValue = returnedFunction(' world!');

    expect(returnedValue).toEqual('hello world!');
  });

});
