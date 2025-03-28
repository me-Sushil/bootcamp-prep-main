describe('countVowels', () => {
  it('is a function', () => {
    expect(typeof countVowels).toEqual('function');
  });

  it('returns a number', () => {
    let returnedValue = countVowels('abc');
    expect(typeof returnedValue).toEqual('number');
  });

  it('returns the number of vowels in the given string', () => {
    let returnedValue = countVowels('life is like a box of chocolates');
    expect(returnedValue).toEqual(12)
  });

});
