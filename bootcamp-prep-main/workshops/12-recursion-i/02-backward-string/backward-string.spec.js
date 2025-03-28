describe('backwardString', () => {

  it('is a function', () => {
    expect(typeof backwardString).toEqual('function');
  });

  it('returns undefined', () => {
    let returnedValue = backwardString('happy');
    expect(returnedValue).toEqual(undefined);
  });

  it('every character in the given string, from back to front', () => {

    // we'll spy on console.log to make sure it's called correctly
    spyOn(console, 'log').and.callThrough();

    backwardString('fun');

    // check that console.log was first called with the string 'n'
    expect(console.log.calls.argsFor(0)).toEqual(['n']);

    // check that console.log was then called with the string 'u'
    expect(console.log.calls.argsFor(1)).toEqual(['u']);

    // check that console.log was then called with the string 'f'
    expect(console.log.calls.argsFor(2)).toEqual(['f']);

    // check that console.log was called exactly three times
    expect(console.log.calls.count()).toEqual(3);

  });

});
