describe('incrementalChange', () => {

  // set the global counter variable to 0 before each test
  beforeEach(() => {
    counter = 0;
  });

  it('is a function', () => {
    expect(typeof incrementalChange).toEqual('function');
  });

  it('returns a number', () => {
    let returnedValue = incrementalChange(1);
    expect(typeof returnedValue).toEqual('number');
  });

  it('returns the current value of the counter', () => {
    let returnedValue1 = incrementalChange(10);
    expect(returnedValue1).toEqual(counter);

    let returnedValue2 = incrementalChange(20);
    expect(returnedValue2).toEqual(counter);
  });

  it('updates the global counter variable', () => {
    incrementalChange(100);
    incrementalChange(-50);
    expect(counter).toEqual(50);
  });

});
