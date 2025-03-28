describe('timesTable', () => {

  it('is a function', () => {
    expect(typeof timesTable).toEqual('function');
  });

  it('returns a function', () => {
    let returnedValue = timesTable(10);
    expect(typeof returnedValue).toEqual('function');
  });

  it('returns a function that correctly calculates the product of any number with the original number', () => {
    let returnedValue = timesTable(7);
    let product = returnedValue(8);

    expect(product).toEqual(56);
  });

});
