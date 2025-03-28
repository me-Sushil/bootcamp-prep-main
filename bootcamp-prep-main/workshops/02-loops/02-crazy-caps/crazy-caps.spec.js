describe('crazyCaps', () => {

  it('is a function', () => {
    expect(typeof crazyCaps).toEqual('function');
  });

  it('returns a string', () => {
    let returnedValue = crazyCaps('any value');
    expect(typeof returnedValue).toEqual('string');
  });

  it('returns a string with alternating lower-case and upper-case letters', () => {
    let returnedValue = crazyCaps('this is crazy');
    expect(returnedValue).toEqual('tHiS Is cRaZy');
  });

});
