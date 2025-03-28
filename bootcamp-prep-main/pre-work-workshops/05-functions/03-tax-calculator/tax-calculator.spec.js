describe('taxCalculator', () => {

  it('is a function', () => {
    expect(typeof taxCalculator).toEqual('function');
  });

  it('returns a number', () => {
    let returnedValue = taxCalculator(100, 'NY');
    expect(typeof returnedValue).toEqual('number');
  });

  it('returns the correct price for NY', () => {
    let returnedValue = taxCalculator(50, 'NY');
    expect(returnedValue).toEqual(52);
  });

  it('returns the correct price for NJ', () => {
    let returnedValue = taxCalculator(10, 'NJ');
    expect(returnedValue).toEqual(10.6625);
  });

});
