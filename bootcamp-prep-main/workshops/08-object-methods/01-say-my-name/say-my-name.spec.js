describe('me', () => {

  it('is an object', () => {
    expect(typeof me).toEqual('object');
  });

  describe('name', () => {

    it('is a property in me', () => {
      expect('name' in me).toEqual(true);
    });

    it('is a string', () => {
      expect(typeof me.name).toEqual('string');
    });

  })

  describe('getGreeting', () => {

    it('is a method in me', () => {
      expect('getGreeting' in me).toEqual(true);
    });

    it('is a function', () => {
      expect(typeof me.getGreeting).toEqual('function');
    });

    it('returns the correct greeting', () => {
      let returnedValue = me.getGreeting();
      expect(returnedValue).toEqual(`Hi, my name is ${me.name}.`);
    });

  })

});
