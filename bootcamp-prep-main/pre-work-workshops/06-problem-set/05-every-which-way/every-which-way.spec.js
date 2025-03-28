describe('everyWhichWay', () => {

  it('is a function', () => {
    expect(typeof everyWhichWay).toEqual('function');
  });

  it('returns "sum" if the sum of the first two numbers equals the third', () => {
    let returnedValue = everyWhichWay(1, 2, 3);
    expect(returnedValue).toEqual('sum');
  });

  it('return "difference" if the first number minus the second equals the third', () => {
    let returnedValue = everyWhichWay(10, 9, 1);
    expect(returnedValue).toEqual('difference');
  });

  it('returns "product" if the product of the first two numbers equals the third', () => {
    let returnedValue = everyWhichWay(10, 5, 50);
    expect(returnedValue).toEqual('product');
  });

  it('returns "fraction" if the first number divided by the second equals the third', () => {
    let returnedValue = everyWhichWay(30, 3, 10);
    expect(returnedValue).toEqual('fraction');
  });

  it('returns if none of the other conditions are true', () => {
    let returnedValue = everyWhichWay(124, 2345, 1);
    expect(returnedValue).toEqual(null);
  });

});
