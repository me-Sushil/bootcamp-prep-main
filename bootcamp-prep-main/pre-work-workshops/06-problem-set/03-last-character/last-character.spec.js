describe('lastCharacter', () => {

  it('is a function', () => {
    expect(typeof lastCharacter).toEqual('function');
  });

  it('returns a boolean', () => {
    let returnedValue = lastCharacter('happy string1', 'happy string2');
    expect(typeof returnedValue).toEqual('boolean');
  });

  it('returns true if both strings end with the same character', () => {
    let returnedValue = lastCharacter('funiful', 'wonderful');
    expect(returnedValue).toEqual(true);
  });

  it('returns false if the strings end with different characters', () => {
    let returnedValue = lastCharacter('happy', 'sad');
    expect(returnedValue).toEqual(false);
  });

});
