describe('whosASpecial', () => {

  it('is a function', () => {
    expect(typeof whosASpecial).toEqual('function');
  });

  it('returns a string', () => {
    let returnedValue = whosASpecial([{}]);
    expect(typeof returnedValue).toEqual('string');
  });

  it('returns a happy string confirming that all pets are special', () => {
    let specialPets = [{
        name: 'Mr. Binns',
        species: 'cat'
      }, {
        name: 'Pusheen',
        species: 'cat'
      }
    ];

    let returnedValue = whosASpecial(specialPets);
    expect(returnedValue).toEqual('Mr. Binns the cat is very special! Pusheen the cat is very special!');

  });

});
