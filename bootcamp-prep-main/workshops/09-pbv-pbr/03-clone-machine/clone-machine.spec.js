describe('cloneMachine', () => {
  let dolly;
  let snuppy;

  // reassign the dolly and polly objects before each test
  beforeEach(() => {
    dolly = {
      name: 'Dolly',
      species: 'sheep',
      offspring: []
    }

    snuppy = {
      name: 'Snuppy',
      species: 'dog',
      offspring: []
    }
  });

  it('is a function', () => {
    expect(typeof cloneMachine).toEqual('function');
  });

  it('returns an object', () => {
    let returnedValue = cloneMachine(dolly);
    expect(typeof returnedValue).toEqual('object');
  });

  it('names the clone after its parent, plus the string "Clone"', () => {
    let dollyClone = cloneMachine(dolly);
    let snuppyClone = cloneMachine(snuppy);

    expect(dollyClone.name).toEqual('DollyClone');
    expect(snuppyClone.name).toEqual('SnuppyClone');
  });

  it('gives the clone the same species as its parent', () => {
    let dollyClone = cloneMachine(dolly);
    let snuppyClone = cloneMachine(snuppy);

    expect(dollyClone.species).toEqual('sheep');
    expect(snuppyClone.species).toEqual('dog');
  });

  it('gives the clone an empty offspring array', () => {
    let dollyClone = cloneMachine(dolly);
    let snuppyClone = cloneMachine(snuppy);

    expect(dollyClone.offspring).toEqual([]);
    expect(snuppyClone.offspring).toEqual([]);
  });

  it('adds the name of the offspring to its parent\'s offspring property', () => {
    let dollyClone = cloneMachine(dolly);
    let snuppyClone = cloneMachine(snuppy);

    expect(dolly.offspring).toEqual(['DollyClone']);
    expect(snuppy.offspring).toEqual(['SnuppyClone']);
  });

  it('adds the name of each offspring to its parent if called multiple times', () => {
    let dollyClone = cloneMachine(dolly);
    let dollyClone2 = cloneMachine(dolly);
    let dollyClone3 = cloneMachine(dolly);

    expect(dolly.offspring).toEqual(['DollyClone', 'DollyClone', 'DollyClone']);
  });

});
