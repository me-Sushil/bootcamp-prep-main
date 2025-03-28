describe('countToTen', () => {

  it('is a function', () => {
    expect(typeof countToTen).toEqual('function');
  });

  it('returns undefined', () => {
    let returnedValue = countToTen(10);
    expect(returnedValue).toEqual(undefined);
  });

  it('logs every number between the number passed to it and 10, including 10', () => {

    // we'll spy on console.log to make sure it's called correctly
    spyOn(console, 'log').and.callThrough();

    countToTen(8);

    // check that console.log was first called with the number 1
    expect(console.log.calls.argsFor(0)).toEqual([8]);

    // check that console.log was then called with the number 2
    expect(console.log.calls.argsFor(1)).toEqual([9]);

    // check that console.log was then called with the number 3
    expect(console.log.calls.argsFor(2)).toEqual([10]);

    // check that console.log was called exactly three times
    expect(console.log.calls.count()).toEqual(3);

  });

});
