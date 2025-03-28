describe('billerBuilder', () => {

  it('is a function', () => {
    expect(typeof billerBuilder).toEqual('function');
  });

  it('returns a function', () => {
    let returnedValue = billerBuilder('NY');
    expect(typeof returnedValue).toEqual('function');
  });

  it('returns a function that correctly calculates the final price in NY', () => {
    let returnedValue = billerBuilder('NY');
    let nyPrice = returnedValue(250);

    expect(nyPrice).toEqual(267.8);
  });

  it('returns a function that correctly calculates the final price in NJ', () => {
    let returnedValue = billerBuilder('NJ');
    let njPrice = returnedValue(250);

    expect(njPrice).toEqual(279.890625);
  });

});
