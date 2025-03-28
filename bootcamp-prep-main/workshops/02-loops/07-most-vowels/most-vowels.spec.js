describe('mostVowels', () => {

  it('is a function', () => {
    expect(typeof mostVowels).toEqual('function');
  });

  it('returns a string', () => {
    let returnedValue = mostVowels('Wit beyond measure is man\'s greatest treasure.');
    expect(typeof returnedValue).toEqual('string');
  });

  it('returns the word with the most vowels', () => {
    let returnedValue = mostVowels('Wit beyond measure is man\'s greatest treasure.');
    expect(returnedValue).toEqual('measure');
  });

  it('returns the word with the most vowels even if it\'s the last string in the sentence', () => {
    let returnedValue = mostVowels('Give her hell from us, Peeves.');
    expect(returnedValue).toEqual('Peeves');
  });

  it('returns an empty string if none of the inputted words have vowels', () => {
    let returnedValue = mostVowels('why dry my sly lynx?');
    expect(returnedValue).toEqual('');
  });

});
