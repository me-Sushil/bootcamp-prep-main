describe('doYouPlayTheTheremin', () => {

  it('is a function', () => {
    expect(typeof doYouPlayTheTheremin).toEqual('function');
  });

  it('returns an boolean', () => {
    let returnedValue = doYouPlayTheTheremin('Mark');
    expect(typeof returnedValue).toEqual('boolean');
  });

  it('returns true if the first letter of the name starts with s', () => {
    let returnedValue = doYouPlayTheTheremin('sarah');
    expect(returnedValue).toEqual(true);
  });

  it('returns true if the first letter of the name starts with S', () => {
    let returnedValue = doYouPlayTheTheremin('Sarah');
    expect(returnedValue).toEqual(true);
  });

  it('returns false given any other input', () => {
    let returnedValue = doYouPlayTheTheremin('Frank');
    expect(returnedValue).toEqual(false);
  });

});
