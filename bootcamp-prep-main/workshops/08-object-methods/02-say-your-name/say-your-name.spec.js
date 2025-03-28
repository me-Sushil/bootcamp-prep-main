describe('me2', () => {

  it('is an object', () => {
    expect(typeof me2).toEqual('object');
  });

  describe('name', () => {

    it('is a property in me2', () => {
      expect('name' in me2).toEqual(true);
    });

    it('is a string', () => {
      expect(typeof me2.name).toEqual('string');
    });

  })

  describe('getGreeting', () => {

    it('is a method in me2', () => {
      expect('getGreeting' in me2).toEqual(true);
    });

    it('is a function', () => {
      expect(typeof me2.getGreeting).toEqual('function');
    });

    it('returns the correct greeting', () => {
      let friend = {
        name: 'Jeff'
      };

      let returnedValue = me2.getGreeting(friend);
      expect(returnedValue).toEqual(`Hi Jeff, my name is ${me2.name}.`);
    });

  })

});
