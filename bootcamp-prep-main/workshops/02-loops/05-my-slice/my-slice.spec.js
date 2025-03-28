describe('mySlice', () => {

  it('is a function', () => {
    expect(typeof mySlice).toEqual('function');
  });

  it('returns a string', () => {
    let returnedValue = mySlice('a piece of pie');
    expect(typeof returnedValue).toEqual('string');
  });

  it('returns a new string starting at the startIdx', () => {
    let returnedValue = mySlice('a piece of pie', 2);
    expect(returnedValue).toEqual('piece of pie');
  });

  it('returns a new string with the correct starting and ending indices', () => {
    let returnedValue = mySlice('a piece of pie', 2, 7);
    expect(returnedValue).toEqual('piece');
  });

  it('returns the original string if no indices are inputted', () => {
    let returnedValue = mySlice('a piece of pie');
    expect(returnedValue).toEqual('a piece of pie');
  });

});
