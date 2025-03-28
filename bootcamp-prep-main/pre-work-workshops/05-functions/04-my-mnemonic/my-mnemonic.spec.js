describe('myMnemonic', () => {

  it('is a function', () => {
    expect(typeof myMnemonic).toEqual('function');
  });

  it('returns a string', () => {
    let returnedValue = myMnemonic('');
    expect(typeof returnedValue).toEqual('string');
  });

  it('returns a mnemonic if all four strings are defined', () => {
    let returnedValue = myMnemonic('Frankly', 'Umbrellas', 'Love', 'Leather');
    expect(returnedValue).toEqual('FULL');
  });

  it('returns a mnemonic if only three string are defined', () => {
    let returnedValue = myMnemonic('Super', 'Tacos', 'Apples');
    expect(returnedValue).toEqual('STA');
  });

  it('returns a mnemonic if only two string are defined', () => {
    let returnedValue = myMnemonic('Candy', 'Kringles');
    expect(returnedValue).toEqual('CK');
  });

});
