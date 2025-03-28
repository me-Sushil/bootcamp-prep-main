describe('functionLogger', () => {
  function addsTen(num) {
    return num + 10;
  }

  it('is a function', () => {
    expect(typeof functionLogger).toEqual('function');
  });

  it('returns the value returned by the callback', () => {
    let returnedValue = functionLogger(addsTen, 10);
    expect(returnedValue).toEqual(20);
  });

});

