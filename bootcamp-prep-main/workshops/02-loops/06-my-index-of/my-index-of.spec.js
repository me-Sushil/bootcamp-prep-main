describe('myIndexOf', () => {

  it('is a function', () => {
    expect(typeof myIndexOf).toEqual('function');
  });

  it('returns a number', () => {
    let returnedValue = myIndexOf('i love apples', 'apples');
    expect(typeof returnedValue).toEqual('number');
  });

  it('returns the first instance of the searchValue in the source', () => {
    let returnedValue = myIndexOf('here and there', 'here');
    expect(returnedValue).toEqual(0);
  });

  it('returns the first instance of the searchValue at or after the startIdx', () => {
    let returnedValue = myIndexOf('here and there', 'here', 4);
    expect(returnedValue).toEqual(10);
  });

  it('returns -1 if the searchValue is not in the source', () => {
    let returnedValue = myIndexOf('here and there', 'nowhere');
    expect(returnedValue).toEqual(-1);
  });

});
