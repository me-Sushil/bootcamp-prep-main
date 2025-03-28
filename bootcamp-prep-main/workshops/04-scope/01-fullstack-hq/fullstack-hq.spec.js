describe('fullstackHQ', () => {

  it('is a function', () => {
    expect(typeof fullstackHQ).toEqual('function');
  });

  it('returns a string', () => {
    let returnedValue = fullstackHQ();
    expect(typeof returnedValue).toEqual('string');
  });

  it('returns the correct string', () => {
    let returnedValue = fullstackHQ();
    expect(returnedValue).toEqual('Fullstack HQ is at Planet Earth, United States, New York State, New York City');
  });

});
