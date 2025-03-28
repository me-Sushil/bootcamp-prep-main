describe('greeting', () => {

  it('is a function', () => {
    expect(typeof greeting).toEqual('function');
  });

  it('returns a string', () => {
    let returnedValue = greeting();
    expect(typeof returnedValue).toEqual('string');
  });

  it('returns a personalized greeting, given a name', () => {
    let returnedValue = greeting('Layla');
    expect(returnedValue).toEqual('Hello Layla!');
  });

  it('returns an anonymous greeting if no name is provided', () => {
    let returnedValue = greeting();
    expect(returnedValue).toEqual('Hello!');
  });

});
