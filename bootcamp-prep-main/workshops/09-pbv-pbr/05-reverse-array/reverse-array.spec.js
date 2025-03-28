describe('reverseArray', () => {

  it('is a function', () => {
    expect(typeof reverseArray).toEqual('function');
  });

  it('returns a reference to the given array', () => {
    let originalArray = ['here', 'we', 'go'];

    let returnedValue = reverseArray(originalArray);
    expect(returnedValue).toEqual(originalArray);
  });

  it('mutates the original array by reversing its elements in place', () => {
    let originalArray = ['here', 'we', 'go'];

    reverseArray(originalArray);

    expect(originalArray).toEqual(['go', 'we', 'here']);
  });

});
