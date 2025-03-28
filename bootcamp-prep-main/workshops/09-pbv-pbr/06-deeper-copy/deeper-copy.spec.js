describe('deeperCopy', () => {

  it('is a function', () => {
    expect(typeof deeperCopy).toEqual('function');
  });

  it('returns an array', () => {
    let returnedValue = deeperCopy([1, 2, 3]);
    expect(Array.isArray(returnedValue)).toEqual(true);
  });

  it('returns a deep copy of the original array', () => {
    let fruits = ['apples', ['bananas', 'citrus']]

    let returnedValue = deeperCopy(['apples', ['bananas', 'citrus']]);
    returnedValue[1].push('dragon fruit');

    expect(fruits).toEqual(['apples', ['bananas', 'citrus']]);
  });
  
  it('copies nested objects completely', () => {
    let fruits = ['apples', ['bananas', 'citrus']]
    let returnedValue = deeperCopy(['apples', ['bananas', 'citrus']]);
    
    expect(fruits[1] === returnedValue[1]).toEqual(false);
  });

});
