describe('mySplice', () => {

  it('is a function', () => {
    expect(typeof mySplice).toEqual('function');
  });

  it('mutates the original array by removing the correct element(s) from it', () => {
    let ourStuff = ['food', 'trash', 'clothes'];

    mySplice(ourStuff, 1, 1);

    expect(ourStuff).toEqual(['food', 'clothes']);
  });

  it('removes multiple elements if deleteCount is greater than 1', () => {
    let funNums = [10, 20, 30, 40, 50, 60];

    mySplice(funNums, 2, 3);
    expect(funNums).toEqual([10, 20, 60]);
  });

  it('returns an array', () => {
    let returnedValue = mySplice(['food', 'trash', 'clothes'], 1, 1);
    expect(Array.isArray(returnedValue)).toEqual(true);
  });

  it('returns an array of the removed elements', () => {
    let returnedValue = mySplice(['food', 'trash', 'clothes'], 1, 1);
    expect(returnedValue).toEqual(['trash']);
  });

  it('returns an array of all removed elements if deleteCount is greater than 1', () => {
    let returnedValue = mySplice([10, 20, 30, 40, 50, 60], 2, 3);
    expect(returnedValue).toEqual([30, 40, 50]);
  });

  it('adds a new value at the correct index', () => {
    let ourStuff = ['food', 'trash', 'clothes'];

    mySplice(ourStuff, 1, 1, 'more food');

    expect(ourStuff).toEqual(['food', 'more food', 'clothes']);
  });

  it('adds a new value at the correct index without removing an element if deleteCount is 0', () => {
    let ourStuff = ['food', 'trash', 'clothes'];

    mySplice(ourStuff, 1, 0, 'more food');

    expect(ourStuff).toEqual(['food', 'more food', 'trash', 'clothes']);
  });

});
