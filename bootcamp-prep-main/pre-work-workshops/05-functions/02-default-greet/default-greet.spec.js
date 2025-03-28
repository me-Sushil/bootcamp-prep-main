describe('defaultGreet', () => {

  it('is a function', () => {
    expect(typeof defaultGreet).toEqual('function');
  });

  it('returns a string', () => {
    let returnedValue = defaultGreet('Natalie', 'Cole');
    expect(typeof returnedValue).toEqual('string');
  });

  it('returns the correct greeting if the first and last name is defined', () => {
    let returnedValue = defaultGreet('Natalie', 'Cole');
    expect(returnedValue).toEqual('Hi Natalie Cole!');
  });

  it('returns the correct greeting if the last name is undefined', () => {
    let returnedValue = defaultGreet('Jane');
    expect(returnedValue).toEqual('Hi Jane Doe!');
  });

});
