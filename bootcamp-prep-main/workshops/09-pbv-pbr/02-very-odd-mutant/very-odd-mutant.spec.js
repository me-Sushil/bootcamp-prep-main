describe('veryOddMutant', () => {

  it('is a function', () => {
    expect(typeof veryOddMutant).toEqual('function');
  });

  it('returns a number', () => {
    let returnedValue = veryOddMutant([1, 2, 3]);
    expect(typeof returnedValue).toEqual('number');
  });

  it('mutates the original array, replacing odd numbers with the string "normie"', () => {
    let originalArray = [5, 10, 15, 20];

    veryOddMutant(originalArray);
    expect(originalArray).toEqual([5, 'normie', 15, 'normie']);
  });

  it('returns the count of the number of even numbers replaced', () => {
    let originalArray = [5, 10, 15, 20];
    let returnedValue = veryOddMutant(originalArray);
    expect(returnedValue).toEqual(2);
  });

});


