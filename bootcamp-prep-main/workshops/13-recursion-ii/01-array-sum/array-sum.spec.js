describe('arraySum', () => {

  it('is a function', () => {
    expect(typeof arraySum).toEqual('function');
  });

  it('returns a number', () => {
    let returnedValue = arraySum([1, 2, 3]);
    expect(typeof returnedValue).toEqual('number');
  });

  it('returns the sum of all the numbers in a flat array', () => {
    let returnedValue = arraySum([1, 2, 3]);
    expect(returnedValue).toEqual(6);
  });

  it('returns the sum of all the numbers in a two-dimensional array', () => {
    let returnedValue = arraySum([[10], [10], [10]]);
    expect(returnedValue).toEqual(30);
  });

  it('returns the sum of all the numbers in a multi-dimensional array', () => {
    let returnedValue = arraySum([8, [6, [7, 5, 3], [0, 9]]]);
    expect(returnedValue).toEqual(38);
  });

});
