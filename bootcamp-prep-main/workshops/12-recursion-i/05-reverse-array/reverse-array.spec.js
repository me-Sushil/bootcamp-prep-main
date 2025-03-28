describe('reverseArray', () => {
  it('is a function', () => {
    expect(typeof reverseArray).toEqual('function');
  });

  it('returns an array', () => {
    let returnedValue = reverseArray([1, 2, 3]);
    expect(Array.isArray(returnedValue)).toEqual(true);
  });

  it('does not mutate the original array', () => {
    let originalArray = [1, 2, 3];
    reverseArray(originalArray);

    expect(originalArray).toEqual([1, 2, 3]);
  });

  it('returns a new array, with the elements reversed from the original', () => {
    let originalArray = ['my!', 'oh', 'bears', 'and', 'tigers', 'and', 'lions'];
    let returnedValue = reverseArray(originalArray);

    expect(returnedValue).toEqual(['lions', 'and', 'tigers', 'and', 'bears', 'oh', 'my!']);
  });

});
