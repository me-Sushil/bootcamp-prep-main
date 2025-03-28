describe('veryOdd', () => {

  it('is a function', () => {
    expect(typeof veryOdd).toEqual('function');
  });

  it('returns an array', () => {
    let returnedValue = veryOdd([1, 2, 3]);
    expect(Array.isArray(returnedValue)).toEqual(true);
  });

  it('returns an array with only the odd numbers from the given array', () => {
    let returnedValue = veryOdd([5, 10, 15, 20]);
    expect(returnedValue).toEqual([5, 15]);
  });

  it('does not mutate the original array', () => {
    let originalArray = [5, 10, 15, 20];
    veryOdd(originalArray);
    expect(originalArray).toEqual([5, 10, 15, 20]);
  });

});

