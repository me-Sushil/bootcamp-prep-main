describe('styleMePretty', function() {

  it('is a function', function() {
    expect(typeof styleMePretty).toEqual('function');
  });

  it('returns a string', function() {
    let returnedValue = styleMePretty();
    expect(typeof returnedValue).toEqual('string');
  });

  it('returns the correct message', function() {
    let returnedValue = styleMePretty();
    expect(returnedValue).toEqual(
      'Unformatted code is difficult to parse for humans if not for machines'
    );
  });

});
