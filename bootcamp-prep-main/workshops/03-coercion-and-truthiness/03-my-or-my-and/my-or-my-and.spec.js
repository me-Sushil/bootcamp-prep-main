describe('myOr', () => {

  it('is a function', () => {
    expect(typeof myOr).toEqual('function');
  });

  it('returns the first value if it is the first truthy value', () => {
    let returnedValue = myOr('apples', 1, false);
    expect(returnedValue).toEqual('apples');
  });

  it('returns the second value if it is the first truthy value', () => {
    let returnedValue = myOr(null, 'i am truthy', 'also true');
    expect(returnedValue).toEqual('i am truthy');
  });

  it('returns the third value if it is the first truthy value', () => {
    let returnedValue = myOr(false, false, true);
    expect(returnedValue).toEqual(true);
  });

  it('returns the third value if none of the values are truthy', () => {
    let returnedValue = myOr('', 0, null);
    expect(returnedValue).toEqual(null);
  });

});

describe('myAnd', () => {

  it('is a function', () => {
    expect(typeof myAnd).toEqual('function');
  });

  it('returns the first value if it is the first falsey value', () => {
    let returnedValue = myAnd(0, 1, false);
    expect(returnedValue).toEqual(0);
  });

  it('returns the second value if it is the first falsey value', () => {
    let returnedValue = myAnd(20, '', 'i am truthy');
    expect(returnedValue).toEqual('');
  });

  it('returns the third value if it is the first falsey value', () => {
    let returnedValue = myAnd(true, 'happy', 0);
    expect(returnedValue).toEqual(0);
  });

  it('returns the third value if all of the values are truthy', () => {
    let returnedValue = myAnd('finally', 'we did it!', 'yay!');
    expect(returnedValue).toEqual('yay!');
  });

});
